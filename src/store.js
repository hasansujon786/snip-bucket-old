import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLightTheme: false
  },
  mutations: {
    _changeTheme(state) {
      state.isLightTheme = !state.isLightTheme
      localStorage.setItem('isLightTheme', state.isLightTheme)
    },
    _onAppLoadsetTheme(state, payload) {
      // active on app load
      state.isLightTheme = payload
      // console.log('_setThemeToLight', payload)
    }
  },
  actions: {
    changeTheme({ commit }) {
      commit('_changeTheme')
    },
    onAppLoadSetThemeToUserChoice({ commit }) {
      const localTheme = JSON.parse(localStorage.getItem('isLightTheme'))
      // null = user is new or user haven't changed theme yet
      localTheme == null
        ? commit('_onAppLoadsetTheme', false)
        : commit('_onAppLoadsetTheme', localTheme)
      // false will make the theme to dark (default)
      // if not null set theme form localStorage
    }
  },
  getters: {
    getThemeBool: state => {
      return state.isLightTheme
    }
  }
})
