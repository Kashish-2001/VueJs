<template>
<div class="create">
  <form @submit.prevent="handleSubmit">
    <label> Title: </label>
    <input v-model="title" type="text" required>
    <label>Content: </label>
    <textarea v-model="details" required></textarea>
    <label>Tags ( hit enter to add a tag ):</label>
    <input
        @keydown.enter.prevent="addtag"
        v-model="tag"
        type="text"
    >
    <div v-for="tag in tags" :key="tag" class="pill">
      #{{ tag }}
    </div>
    <button>Add Post</button>
  </form>
</div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from "@/firebase/config";

export default {
  setup() {
    const title = ref(null)
    const details = ref(null)
    const tag = ref(null)
    const tags = ref([])

    const router = useRouter()

    const addtag = () => {

      if(!tags.value.includes(tag.value)){
        tag.value = tag.value.replace(/\s/g, '')
        tags.value.push(tag.value)
      }
      tag.value = ''
    }
    const handleSubmit = async () => {
      const post = {
        title: title.value,
        details: details.value,
        tags: tags.value,
        createdAt: timestamp()
      }
      // await fetch('http://localhost:3000/posts',{
      //           method: 'POST',
      //           headers: { 'Content-Type': 'application/json' },
      //           body: JSON.stringify(post)
      //     })
      const res = await projectFirestore.collection('posts').add(post)

      router.push({ name: 'Home' })
    }
    return { title, details, tag, tags, addtag, handleSubmit }
  },
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid darkslategrey;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: peru;
    margin-bottom: 10px;
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer;
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>
