<script>
export default {
  name: 'MessageBox',
  props: {
    messageData: {
      type: Object,
      required: true
    },
    authenticatedUser: {
      type: Object,
      required: true
    },
    otherUser: {
      type: Object,
      required: true
    }
  },
  computed: {
    isMyUser() {
      return this.authenticatedUser.firstName.toLowerCase() === this.messageData.from.toLowerCase() 
    }
  }
}
</script>

<template>
  <div :class='[
    "message-container",
    {"right-alignment": isMyUser}
  ]'>
    <div class="thumbnail">
    </div>
    <div 
      :class='[
        "message-bubble",
        {"user-message": isMyUser}
      ]'
    >
      {{messageData.message}}</div>
  </div>
</template>

<style scoped>
.message-container {
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.right-alignment {
  flex-direction: row-reverse;
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

.user-message {
  margin-left: auto;
  background-color: lightblue;
  margin-right: 12px;
}
</style>