<template>

  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout" >
    <PostList :posts="filteredposts" />
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
import Spinner from "@/components/Spinner.vue";
import TagBar from  "../components/TagBar.vue"
import {computed} from "vue";
import { useRoute } from "vue-router"

export default {
  name: 'FilterTag',
  components: { Spinner, PostList, TagBar },
  props: ['tag'],
  setup: function (props) {
    const route = useRoute()
    // console.log(route)
    const {posts, error, load} = getposts()

    load()

    const filteredposts = computed(() => {
       // return posts.value.filter(p => p.tags.includes(route.params.tag))
      return posts.value.filter(post => post.tags.includes(props.tag))
    })

    return { posts, filteredposts, error }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
