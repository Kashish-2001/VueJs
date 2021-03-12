<template>
  <div class="container">
    <Navbar/>
    <Chatwindow/>
    <NewChatForm/>
  </div>
</template>

<script>
    import Navbar from "@/components/Navbar";
    import { watch } from 'vue'
    import getUser from "@/composibles/getUser";
    import {useRouter} from "vue-router";
    import NewChatForm from "@/components/NewChatForm";
    import Chatwindow from "@/components/ChatWindow";
    export default {
      name: 'ChatRoom',
      components: {Chatwindow, NewChatForm, Navbar},
      setup(){
        const router = useRouter()
        const { user } = getUser()

        watch(user, () => {
          if(!user.value){
            router.push( '/' )
          }
        })
      }
    };
</script>
