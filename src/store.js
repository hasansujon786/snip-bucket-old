import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allLangList: ['hasan', 'sujon', 'sorker']
  },
  mutations: {},
  actions: {},
  getters: {
    getAllLangList: state => {
      return state.allLangList
    }
  }
})
