export default {
  methods: {
    /*
      param: {
        startDate  开始日期 格式：2020-10-20
        beforeDay  往前计算多少天
      }
    */
    getDates (startDate, beforeDay = 1) {
      if (!startDate) return []
      const day = startDate.match(/\d+-\d+-(\d+).*/)[1]
      const kkrq = this.os.isIOS ? startDate.replace(/-/g, '/') : startDate
      let dates = []
      for (let i = 0; i < beforeDay; i++) {
        let date = new Date(kkrq)
        date.setDate(day * 1 - beforeDay + i)
        const year = date.getFullYear()
        const newMonth = date.getMonth() + 1
        const newDay = date.getDate()
        const full = `${year}-${newMonth > 9 ? newMonth : '0' + newMonth}-${newDay > 9 ? newDay : '0' + newDay}`
        const simple = `${newMonth > 9 ? newMonth : '0' + newMonth}-${newDay > 9 ? newDay : '0' + newDay}`
        // const tbItem = this.tbrq.find(item => item.tbrq === full) || {jkzt: '2'}
        dates.push({
          full,
          simple
          // jkzt: tbItem.jkzt
        })
      }
      return dates
    },
    // 时间格式
    formatTime (date = new Date(), backDate) {
      const year = date.getFullYear()
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()
      const minute = date.getMinutes()
      const second = date.getSeconds()
      const t1 = [year, month, day].map(this.formatNumber).join('-')
      const t2 = [hour, minute, second].map(this.formatNumber).join(':')
      // 返回值格式判断
      if (backDate === 'date') {
        return `${t1}`
      } else {
        return `${t1} ${t2}`
      }
    },
    formatNumber (n) {
      const str = n.toString()
      return str[1] ? str : `0${str}`
    },
    getKsLx () {
      if (this.$store.state.ksLx.length > 0) {
        return Promise.resolve(this.$store.state.ksLx)
      } else {
        return this.$http('cache/getKslx.jsmeb', {}).then(res => {
          if (res && res.result) {
            this.$store.dispatch('SETKSLX', res.result)
            return res.result
          }
        })
      }
    },
    getUserInfo() {
      if (Object.keys(this.$store.state.userInfo).length) {
        return Promise.resolve(this.$store.state.userInfo)
      } else {
        return this.$http('h5pj/getCurrUser.jsmeb', {}).then(res => {
          if (res && res.result) {
            this.$store.dispatch('SETUSERINFO', res.result || {})
            return res.result || {}
          }
        })
      }
    },
    getJs() {
      if (Object.keys(this.$store.state.jsInfo).length) {
        return Promise.resolve(this.$store.state.jsInfo)
      } else {
        return this.$http('yhxx/getJs.jsmeb', {}).then(res => {
          if (res && res.result) {
            this.$store.dispatch('SETJSINFO', res.result || {})
            return res.result || {}
          }
        })
      }
    },
    getXq () {
      if (Object.keys(this.$store.state.xq).length) {
        return Promise.resolve(this.$store.state.xq)
      } else {
        return this.$http('cache/getCurrentXq.jsmeb', {}).then(res => {
          if (res && res.result) {
            this.$store.dispatch('SETXQ', res.result || {})
            return res.result || {}
          }
        })
      }
    },
    getPjlc () {
      if (this.$store.state.pjlc.length > 0) {
        return Promise.resolve(this.$store.state.pjlc)
      } else {
        return this.$http('cache/getPjlc.jsmeb', {}).then(res => {
          if (res && res.result) {
            this.$store.dispatch('SETPJLC', res.result)
            return res.result
          }
        })
      }
    },
    getKsty() {
      if (this.$store.state.ksty.length > 0) {
        return Promise.resolve(this.$store.state.ksty)
      } else {
        return this.$http('cache/getKsty.jsmeb', {}).then(res => {
          if (res && res.result) {
            const obj = {}
            for (let item of res.result) {
              obj[item.key] = item.mc
            }
            this.$store.dispatch('SETKSTY', obj)
            return obj
          }
        })
      }
    }
  }
}
