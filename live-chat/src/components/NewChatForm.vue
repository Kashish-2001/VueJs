<template>
  <form @submit.prevent="handleSubmit" >

    <textarea @keydown.enter.prevent="handleSubmit" v-model="message" placeholder="Type your message here and press enter to send"></textarea>
<!--    <button type="submit">Send</button>-->
  </form>
  <div class="error">{{ error }}</div>
</template>

<script>
    import getUser from "@/composibles/getUser";
    import {timestamp} from "@/firebase/config";
    import {ref} from 'vue'
    import useCollection from "@/composibles/useCollection";
    export default {
      name: 'Newchatform',

      setup(){
        const {user} = getUser()
        const { error, addDoc } = useCollection('message')

        const message = ref('')
        const handleSubmit = async () => {
          const chat = {
            name: user.value.displayName,
            message: message.value,
            createdAt: timestamp()
          }
          if(message.value !== ''){

          await addDoc(chat)
          }
          // console.log(chat)
          if(!error.value){
            message.value = ''
          }
        }

        return {handleSubmit, message, error}
      }
    };
</script>

<style scoped>
  form {
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
  }
  textarea {
    width: 85%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  button{
    margin-bottom: 6px;
    margin-right: 15px;

  }
</style>
