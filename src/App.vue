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
    scrollToBottom() {
      const element = document.querySelector('.conversation-container')
      if (element) {
        element.scrollTo({
          top: element.scrollHeight,
          behavior: 'smooth'
        })
      }
      window.scrollTo(0, document.body.scrollHeight)
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
      this.scrollToBottom()
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
}
</style>
