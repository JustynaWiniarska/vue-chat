import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      messages: []
    }
  },
  mutations: {
    setMessages(state, payload) {
      state.users = payload
    }
  },
  actions: {
    async fetchMessages({commit}) {
      try {
        const response = await fetch('http://localhost:3001/messages')
        const messages = await response.json()

        if (!response.ok) {
          throw new Error('Failed to fetch messages')
        }

        commit('setMessages', messages)
      }
      catch (e) {
        console.error('Error fetching messages: ', e)
      }
    }
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
