import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      messages: [],
      users: [],
      authenticatedUser: null,
      secondUser: null
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
      // define user types:
      state.authenticatedUser = payload.find(user => user.authenticated) || null
      state.secondUser = payload.find(user => !user.authenticated) || null
    },
    setMessages(state, payload) {
      state.messages = payload
    }
  },
  actions: {
    async fetchUsers({commit}) {
      try {
        const response = await fetch('http://localhost:3001/users')
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        const users = await response.json()
        commit('setUsers', users)
      }
      catch (e) {
        console.error('Error fetching users: ', e)
      }
    },
    async fetchMessages({commit}) {
      try {
        const response = await fetch('http://localhost:3001/messages')
        if (!response.ok) {
          throw new Error('Failed to fetch messages')
        }
        const messages = await response.json()
        commit('setMessages', messages)
      }
      catch (e) {
        console.error('Error fetching messages: ', e)
      }
    }
  },
  getters: {
    messages: state => state.messages,
    authenticatedUser: state => state.authenticatedUser,
    secondUser: state => state.secondUser
  }
})

const app = createApp(App)

app.use(store)

app.mount('#app')
