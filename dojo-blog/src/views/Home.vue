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

import PostList from "@/components/PostList.vue";
import getposts from "@/composables/getposts";
import Spinner from "@/components/Spinner";
import TagBar from "@/components/TagBar";

export default {
  name: 'Home',
  components: { TagBar, Spinner, PostList },
  setup() {
    const { posts, error, load } = getposts()
    load()
    return { posts, error }
  }
}

</script>

<style>

.home{
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
