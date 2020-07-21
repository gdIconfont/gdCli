const mutations = {
  showLoading (state, flag) {
    state.showLoading = flag
  },
  SETUSERINFO (state, data) {
    state.userInfo = data
  },
  SETJSINFO(state, data) {
    state.jsInfo = data
  },
  SETKSLX(state, data) {
    state.ksLx = data
  },
  SETXQ(state, data) {
    state.xq = data
  },
  SETCURRENTKS(state, data) {
    state.currentKs = data
  },
  SETPJLC(state, data) {
    state.pjlc = data
  },
  SETKSTY(state, data) {
    state.ksty = data
  },
  SETKSKM(state, data) {
    state.kskm = data
  }
}

export default mutations
