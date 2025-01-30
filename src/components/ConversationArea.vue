<script>
import MessageBox from './MessageBox.vue';

export default {
  name: 'App',
  components: {
    MessageBox
  },
  data: () => {
    return {
      messages: [],
      authenticatedUser: null,
      secondUser: null
    }
  },
  created() {
    this.fetchUsers()
    this.fetchMessages()
  },
  watch: {
    messages (newVal) {
      if (newVal) {
        this.fetchMessages()
      }
    },
    deep: true
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:3001/users')
        this.users = await response.json()

        // define users:
        if (this.users.length) {
          this.authenticatedUser = Object.values(this.users).find(user => user.authenticated === true)

          this.secondUser = Object.values(this.users).find(user => user.authenticated === false)
        }

        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
      }
      catch (e) {
        console.error('Error fetching users: ', e)
      }
    },
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
  <div 
    ref="conversationContainer"
    class="conversation-container"
  >
    <div v-if="messages && messages.length">
      <div
        v-for="message in messages"
        :key="message.id"
      >
      <MessageBox
        :authenticated-user="authenticatedUser"
        :other-user="secondUser"
        :message-data="message"
      />
    </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.conversation-container {
  border: 2px solid gray;
  max-height: calc(100vh - 100px);
  overflow-y: scroll;
}
</style>