<template>
      <form @submit.prevent="handleUpdate">
        <label> TITLE </label>
        <input type="text" v-model="title" required>
        <label> DETAILS </label>
        <textarea v-model="details" required></textarea>
        <button>
          Update Project
        </button>
      </form>
</template>

<script>
    export default {
        name: 'Editproject',
      props: ['id'],
      data(){
          return {
            title: '',
            details: '',
            url: 'http://localhost:3000/projects/' +this.id
          }
      },
      methods:{
        handleUpdate(){
          let updatedData = {
            'title': this.title,
            'details': this.details
          }
          fetch(this.url, {method: 'PATCH',
                                headers: {'Content-Type': 'application/json'},
                                body: JSON.stringify(updatedData)})
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err.message))
        }
      },
      mounted() {
          fetch(this.url).then((res) => res.json())
              .then((data) =>{
                this.title= data.title
                this.details = data.details
          })
        .catch(err => console.log(err.message))
      }


    };
</script>
