<template>
  <div v-if="showBlock" @click="stopTimer" class="block">Click me !!</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer : null,
      reactionTime: 0
    };
  },
  methods:{
    startTimer(){
      this.timer =setInterval(()=>{
        this.reactionTime+=5
      }, 5)
    },
    stopTimer(){
      clearInterval(this.timer)
      console.log(this.reactionTime)
      this.$emit('end', this.reactionTime)
    },

    },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer()
    }, this.delay);
  },

};
</script>

<style>
.block {
  background: #0faf87;
  color: white;
  width: 25%;
  height: 25%;
  border-radius: 15px;
  align-content: center;
  padding: 5%;
  margin: 10px auto;
}
</style>
