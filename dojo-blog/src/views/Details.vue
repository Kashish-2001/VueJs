<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.detail }}</p>
   </div>
  <div v-else>
    <Spinner/>
  </div>
</template>

<script>
import getpost from "@/composables/getpost";
import Spinner from "@/components/Spinner";
import { useRoute } from 'vue-router'
import router from "@/router";

    export default {
      components: { Spinner },
      props: ['id'],
      setup(props){
        // const { post, error, load } = getpost(props.id)
        const { post, error, load } = getpost(router.params.id)
        load()
        return { post, error }
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
</style>
