<script>
import ConversationArea from './components/ConversationArea.vue';
import ComposeSection from './components/ComposeSection.vue';

export default {
  name: 'App',
  components: {
    ConversationArea,
    ComposeSection
  },
  methods: {
    handleSendMessage(message) {
      this.postNewMessage(message)

    },
    async postNewMessage(message) {
      const newMessage = {
        id: Date.now(),
        from:'jack',
        message,
        date: new Date()
      }
      await fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...newMessage
        })
      })
    }



  }
}
</script>

<template>
  <div>
    <ConversationArea
    />
    <ComposeSection 
      @send-message="handleSendMessage($event)"
    />
  </div>
</template>

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
