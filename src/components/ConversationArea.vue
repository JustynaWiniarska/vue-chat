<script>
import MessageBox from './MessageBox.vue';

export default {
  name: 'App',
  components: {
    MessageBox
  },
  data: () => {
    return {
      messages: []
    }
  },
  created() {
    this.fetchMessages()
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await fetch('http://localhost:3001/messages')
        this.messages = await response.json()

        if (!response.ok) {
          throw new Error('Failed to fetch messages')
        }
      }
      catch (e) {
        console.error('Error fetching messages: ', e)
      }
    }
  }
}
</script>

<template>
  <div class="conversation-container">
    <div v-if="messages && messages.length">
      <div
        v-for="(message, index) in messages"
        :key="index"
      >
      <MessageBox :message-data="message" />
    </div>
    </div>
    
  </div>
</template>

<style lang="css" scoped>
.conversation-container {
  border: 2px solid gray;
  height: 400px;
  overflow-y: scroll;
}
</style>