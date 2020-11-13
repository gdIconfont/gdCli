const actions = {
  showLoading ({commit}, flag) {
    commit('showLoading', flag)
  },
  SETUSERINFO ({commit}, data) {
    commit('SETUSERINFO', data)
  }
}

export default actions
