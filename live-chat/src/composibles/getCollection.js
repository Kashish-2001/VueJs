import {ref, watchEffect} from 'vue'
import {projectFirestore} from "@/firebase/config";

const getCollection = (collection) => {
    const document = ref(null)
    const error = ref(null)
    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

    const unsubscribe = collectionRef.onSnapshot(snap => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data(), id:doc.id})
        })
        document.value = results
        error.value = null
    }, err => {
        console.log(err.message)
        error.value = 'could not fetch the data'
    })

    watchEffect((onInvalidate) =>{
        // onInvalidate function runs when the function inside unmounts**
        // unsubscribe from prev collection when watcher is stopped (component unmounts)
        onInvalidate(() => unsubscribe() )
    })

    return { error, document }
}

export default getCollection
