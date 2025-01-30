<template>
  <div>
    <ConversationArea />
  </div>
</template>

<script>
import ConversationArea from './components/ConversationArea.vue';

export default {
  name: 'App',
  components: {
    ConversationArea
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const response = await fetch('http://localhost:3001/messages')
      console.log(response.json())
    }
  }
}
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
</style>
