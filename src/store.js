import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLightTheme: true
  },
  mutations: {
    _changeTheme(state) {
      state.isLightTheme = !state.isLightTheme
      localStorage.setItem('isLightTheme', state.isLightTheme)
      // console.log(state.isLightTheme)
    },
    _setThemeToLight(state, payload) {
      state.isLightTheme = payload
      console.log('_setThemeToLight', payload)
    }
  },
  actions: {
    changeTheme({ commit }) {
      commit('_changeTheme')
    },
    onAppLoadSetThemeToUserChoice({ commit }) {
      const localTheme = JSON.parse(localStorage.getItem('isLightTheme'))
      console.log('localTheme', localTheme)

      localTheme == null ? commit('_setThemeToLight', true) : commit('_setThemeToLight', localTheme)
    }
  },
  getters: {
    getThemeBool: state => {
      return state.isLightTheme
    }
  }
})
