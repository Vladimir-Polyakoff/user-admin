import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatList: []
  },
  getters: {
    getChatList (state) {
      return state.chatList
    }
  },
  mutations: {
    setMessage (state, message) {
      state.chatList.push(message)
    }
  },
  actions: {
    addMessage ({ commit }, message) {
      commit('setMessage', message)
    }
  },
  modules: {
  }
})
