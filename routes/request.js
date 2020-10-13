var config = require('../app.config')
var cbaseUrl = config.baseUrl
var axios = require('axios')

function request (options, req, res) {
  const params = options.params || []
  const method = options.method || req.method
  // var url = options.url
  const baseURL = options.baseUrl || (req.session.user && req.session.user.baseUrl) || cbaseUrl
  const token = options.token || (req.session.user && req.session.user.token) || ''
  let url = `${options.url}.ssoeb?ebtoken=${token}`
  if (method === 'GET') url = `${options.url}.ssoeb?ebtoken=${token}&jseb=${params.join(',')}`
  return axios({
    method,
    url,
    baseURL,
    data: method === 'GET' ? '' : Object(params),
    timeout: options.timeout || 180000,
    headers: {
      'Content-Type': 'text/html;charset=utf-8',
      // 'Content-Length': Buffer.byteLength(JSON.stringify(params), 'uft8'),
      'ebauth': token
    },
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理
      try {
        data = JSON.parse(data)
      } catch (e) {}
      return data
    }]
  }).then(response => {
    let data = response.data
    console.log('<----------------------请求日志---------------------->')
    let resData = {
      url: response.config.url,
      params,
      token,
      data
    }
    console.log(resData)
    if (options.next) return data
    res.json(data)
  })
  .catch(error => {
    console.log('<----------------------错误日志---------------------->')
    console.log(error)
    // 请求不在2**内的
    if (options.next) return error
    res.json(error)
  })
}
module.exports = request
