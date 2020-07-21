var util = {
  // 解析链接上面的参数
  getRequest (url) {
    url = url || location.href
    const urlList = url.split('?')
    let theRequest = {}
    if (urlList && urlList.length > 1) {
      var str = urlList[1]
      if (str.indexOf('#!/') > -1) {
        str = str.replace('#!/', '')
      }
      if (str.indexOf('#/') > -1) {
        str = str.replace('#/', '')
      }
      var strs = str.split('&')
      for (var i = 0; i < strs.length; i++) {
        var arr = strs[i].split('=')
        let val = unescape(strs[i].substring(arr[0].length + 1))
        if (val) {
          val = val.replace(/@/g, '=')
        }
        theRequest[arr[0]] = val
      }
    }
    return theRequest
  },
  dateFormat(fmt, date) {
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "m+": (date.getMonth() + 1).toString(), // 月
      "d+": date.getDate().toString(), // 日
      "H+": date.getHours().toString(), // 时
      "M+": date.getMinutes().toString(), // 分
      "S+": date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
    };
    return fmt;
  }
}

module.exports = util
