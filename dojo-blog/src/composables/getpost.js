import { ref } from 'vue'
import {projectFirestore} from "@/firebase/config";

const getpost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            // await new Promise(resolve => {
            //     setTimeout(resolve, 2000)
            // })
            // let data = await fetch('http://localhost:3000/posts/' + id)
            // if(!data.ok){
            //     throw Error('Post does not exist')
            // }
            // post.value = await data.json()
            // console.log("post")

            const res = await projectFirestore.collection('posts').doc(id).get()
            post.value = { ...res.data(), id: res.id }
            console.log(res.data())

            if(!res.exists){
                throw Error("That post doesn't exist")
            }
        }
        catch (err){
            error.value = err.message
        }

    }
return { post, error, load }
}

export default getpost
