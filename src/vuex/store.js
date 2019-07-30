import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const state = {
  showLoading: false
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState({ storage: window.sessionStorage })]
})
