const actions = {
  showLoading ({commit}, flag) {
    commit('showLoading', flag)
  },
  SETUSERINFO ({commit}, data) {
    commit('SETUSERINFO', data)
  },
  SETKSLX ({commit}, data) {
    commit('SETKSLX', data)
  },
  SETJSINFO({
    commit
  }, data) {
    commit('SETJSINFO', data)
  },
  SETXQ({
    commit
  }, data) {
    commit('SETXQ', data)
  },
  SETCURRENTKS({
    commit
  }, data) {
    commit('SETCURRENTKS', data)
  },
  SETPJLC({
    commit
  }, data) {
    commit('SETPJLC', data)
  },
  SETKSTY({
    commit
  }, data) {
    commit('SETKSTY', data)
  },
  SETKSKM({
    commit
  }, data) {
    commit('SETKSKM', data)
  }
}

export default actions
