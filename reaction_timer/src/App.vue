<template>
  <h1>Reaction Timer</h1>
  <button class="start" @click="start" :disabled="is_playing">Play</button>
  <Block v-if="is_playing" :delay="delay" @end="endGame" />
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";
export default {
  name: "App",
  components: {Results, Block },
  data() {
    return {
      is_playing: false,
      delay: null,
      score: null,
      showResults: false
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.is_playing = true;
      this.showResults = false
    },
    endGame(reactionTime){
      this.score = reactionTime
      this.is_playing = false
      this.showResults = true
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button{
  background: #0faf87;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled]{
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
