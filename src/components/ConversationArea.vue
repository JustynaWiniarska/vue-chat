<script>
import MessageBox from './MessageBox.vue';
import { mapState, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    MessageBox
  },
  computed: {
    ...mapState(['users', 'messages', 'authenticatedUser', 'secondUser'])
  },
  created() {
    this.fetchUsers()
    this.fetchMessages()
  },
  watch: {
    messages: {
      handler (newVal) {
        if (newVal) {
          this.fetchMessages()
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['fetchUsers', 'fetchMessages'])
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
        :message-data="message"
      />
    </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.conversation-container {
  border: 2px solid gray;
  max-height: calc(100vh - 110px);
  overflow-y: scroll;
}
</style>