const mutations = {
  showLoading (state, flag) {
    state.showLoading = flag
  },
  SETUSERINFO (state, data) {
    state.userInfo = data
  }
}

export default mutations
