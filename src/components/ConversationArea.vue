<script>
import MessageBox from './MessageBox.vue';

export default {
  name: 'App',
  components: {
    MessageBox
  }
}
</script>

<template>
  <div class="conversation-container">
    <h1>Conversation area</h1>

    <MessageBox />

  </div>
</template>

<style lang="css" scoped>
.conversation-container {
  border: 2px solid gray;
  height: 400px
}
</style>