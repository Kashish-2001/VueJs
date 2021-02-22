<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
    <PostList :posts="posts" />
    <TagBar :posts="posts"/>
    </div>
    <div v-else>
      <Spinner/>
    </div>
  </div>
</template>

<script>
import { projectFirestore } from "@/firebase/config";
import { ref } from 'vue'


import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner";
import TagBar from "@/components/TagBar";

export default {
name: "RealTime",
  components: { TagBar, Spinner, PostList },
  setup(){
  const posts = ref([])
    projectFirestore.collection('posts')
    .orderBy('createdAt', "desc")
    .onSnapshot(snap => {
      console.log(snap)
      let docs = snap.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
      })
    posts.value = docs
    })
    return { posts }
  }
}
</script>

<style scoped>

</style>
