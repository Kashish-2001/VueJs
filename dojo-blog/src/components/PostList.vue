<template>
<!--  <h2>Post List</h2>-->
  <div class="post-list">
    <div v-if="posts" v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
    </div>
    <div v-else>
        Loading posts
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
import {onMounted, onUnmounted, onUpdated} from "vue";

    export default {
        name: 'PostList',
        components:{ SinglePost },
        props:['posts'],
    };
</script>

<style>

</style>
