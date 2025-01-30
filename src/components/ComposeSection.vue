<script>
export default {
  name: 'ComposeSection',
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendReply() {
      this.$emit('send-message', this.message)
      this.message=''
    }
  }
}
</script>

<template>
  <form 
    class="compose-form"
    @submit.prevent="sendReply"
  >
    <textarea 
      placeholder="Type your message here"
      rows="3"
      v-model="message"
      @keydown.enter.prevent="sendReply"
    ></textarea>
    <button
      class="send-btn"
      type="submit"
    >
      Send
    </button>
  </form>
</template>

<style scoped>
.compose-form {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  height: 40px;
}
textarea {
  width: 100%;
  padding: 8px;
  font-size: 20px;
}
.send-btn {
  width: 60px;
  margin-left: 12px;
}
</style>