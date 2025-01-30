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
      if (this.message !== '') {
        this.$emit('send-message', this.message)
      }
      this.message=''
    },
    expandTextarea() {
      const element = this.$refs.expndableTextarea
      element.style.height = 'auto'
      element.style.height = `${element.scrollHeight}px`
      const conversationElement = document.querySelector('.conversation-container')
      conversationElement.style.height = 'calc(100vh - 130px)'

      if (element.scrollHeight > 80) {
        element.style.height = "80px"
        element.style.overflowY = "scroll"
      } else {
        element.style.overflowY = "hidden"
      }
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
      ref="expndableTextarea"
      placeholder="Type your message here"
      v-model="message"
      @keydown.enter.prevent="sendReply"
      @input="expandTextarea"
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
  margin: 12px 0;
}
textarea {
  width: 100%;
  padding: 8px;
  font-size: 20px;
  line-height: 1.4;
  height: auto;
  min-height: 26px;
  max-height: 80px;
}
.send-btn {
  width: 60px;
  margin-left: 12px;
}
</style>