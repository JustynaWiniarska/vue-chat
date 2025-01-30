<script>
export default {
  name: 'MessageBox',
  props: {
    messagesData: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log('CHILD', this.messagesData)
  }
}
</script>

<template>
  <div class="message-container">
    <div class="thumbnail"></div>
    <div class="message-bubble">message  </div>
  </div>
</template>

<style scoped>
.message-container {
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.thumbnail {
  width: 48px;
  height: 48px;
  background-color: teal;
  border-radius: 50%;
  margin-right: 12px;
}

.message-bubble {
  border: 2px solid darkgray;
  border-radius: 8px;
  padding: 8px;
  width: fit-content;
  max-width: 60%;
  text-align: left;
}
</style>