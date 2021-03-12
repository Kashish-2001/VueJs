<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="formattedDocument" class="messages" ref="messages">
      <div class="single" v-for="doc in formattedDocument" :key="doc.id">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
    import getCollection from "@/composibles/getCollection";
    import { computed, ref, onUpdated } from 'vue';
    import { formatDistanceToNow } from 'date-fns'

    export default {
        name: 'Chatwindow',
        setup(){
          const { error, document } = getCollection('message')
          const formattedDocument = computed(() => {
            if(document.value){
              return document.value.map(doc => {
                let time = formatDistanceToNow(doc.createdAt.toDate())
                return { ...doc, createdAt: time }
              })
            }
          })

          const messages = ref(null)
          onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
          })
          return { error, document, formattedDocument, messages }
        }
    };
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>
