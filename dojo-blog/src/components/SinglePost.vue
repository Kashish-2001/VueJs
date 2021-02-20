<template>
    <div class="post">
        <router-link :to="{ name: 'Details', params: { id: post.id }}">
          <h3>{{ post.title }}</h3>
        </router-link>
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag" class="tag">
        <router-link :to="{ name: 'FilterTag', params: { tag: tag } }">
          #{{ tag }}
        </router-link>
      </span>
      </div>
</template>

<script>
import { computed} from 'vue'

  export default {
        name: 'PostDetail',
        props: ['post'],
        setup(props){
          const snippet = computed(() =>{
            return props.post.detail.substring(0,50) + '...'
          })

        return { snippet }
        },
    };
</script>

<style>
  .post{
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e7e7e7;
    /*max-width: 1000px;*/
  }
  .post h3{
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: peru;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .tag {
      display: inline-block;
      padding: 10px;
  }
  .tag a {
    color: grey;
    text-decoration: none;
  }

</style>
