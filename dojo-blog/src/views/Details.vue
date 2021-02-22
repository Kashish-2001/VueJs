<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.details }}</p>
   </div>
  <div v-else>
    <Spinner/>
  </div>
  <button @click="handleDelete" class="delete">Delete post</button>
</template>

<script>
import getpost from "@/composables/getpost";
import Spinner from "@/components/Spinner";
import {useRoute, useRouter} from 'vue-router'
import { projectFirestore } from "@/firebase/config";
    export default {
      components: { Spinner },
      // props: ['id'],
      setup(props){
        const route = useRoute()
        const router = useRouter()
        // const { post, error, load } = getpost(props.id)
        const { post, error, load } = getpost(route.params.id)
        load()
        const handleDelete = async () => {
          const res = await projectFirestore.collection('posts').doc(route.params.id).delete()
          router.push('/')
        }
        return { post, error, handleDelete }
      },
    };
</script>


<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete{
    margin: 10px auto;
    cursor: pointer;
  }
</style>
