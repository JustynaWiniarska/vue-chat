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
    },
    imageSrc() {
      if (this.isMyUser) {
        return this.authenticatedUser.thumbnail
      } else if (!this.isMyUser) {
        return this.otherUser.thumbnail
      }
      // returns placeholder the above condition fails:
      return 'https://media.istockphoto.com/id/1398772463/photo/portrait-golden-retriever-puppy-dog-showing-teeth-and-tongue-looking-away-isolated-on-blue.jpg?s=612x612&w=0&k=20&c=qDlOwTsnScV68vHZ-eY_G96S7SkGXW6jCbYSreq1Xtk='
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
      <img :src="imageSrc" />
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

.thumbnail img {
  width: 48px;
  height: 48px;
  background-color: teal;
  border-radius: 50%;
  margin-right: 12px;
}

.message-bubble {
  background-color: lightgray;
  border-radius: 8px;
  padding: 8px;
  width: fit-content;
  max-width: 60%;
  text-align: left;
  font-size: 20px;
}

.user-message {
  margin-left: auto;
  background-color: lightblue;
  margin-right: 12px;
}
</style>