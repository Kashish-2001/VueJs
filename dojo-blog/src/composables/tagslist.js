import { ref } from 'vue'

const taglist = (posts) => {
    const tags = ref([])
    const tagset = new Set

    posts.forEach(post => {
        post.tags.forEach( tag => { tagset.add(tag) } )
    })
    tags.value = [...tagset]
    return { tags }
}

export default taglist
