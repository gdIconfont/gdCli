import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)
const state = {
  showLoading: false,
  userInfo: {} // 用户信息
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: Object.keys(state).reduce((getter, key) => {
    getter[key] = state => state[key]
    return getter
  }, {}),
  plugins: [createPersistedState({
    storage: window.sessionStorage,
    paths: Object.keys(state).filter(item => !~['showLoading', 'userInfo', 'jsInfo'].indexOf(item))
  })]
})
