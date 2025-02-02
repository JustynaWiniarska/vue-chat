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
    async handleSendMessage(message) {
      await this.$store.dispatch('postNewMessage', message)
      this.scrollToBottom()
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
    }
  }
}
</script>

<template>
  <div>
    <ConversationArea />
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
