var config = require('../app.config')
var cbaseUrl = config.baseUrl
var axios = require('axios')

function request (options, req, res, cb) {
  var params = options.params || []
  var url = `${options.url}.jsmeb`
  var baseUrl = options.baseUrl
  var token = options.token || ''
  // token统一放在user对象下
  try {
    token = req.session.user.token
  } catch (e) {
    token = ''
  }
  if (req.method === 'GET') {
    url = url.replace(/\?.*/, `.jsmeb?jseb=${params}`)
  }
  if (!baseUrl) baseUrl = cbaseUrl
  return axios({
    method: req.method,
    url,
    baseURL: baseUrl,
    data: req.method === 'GET' ? '' : Object(params),
    timeout: options.timeout || 180000,
    headers: {
      'Content-Type': 'text/html;charset=utf-8',
      'Content-Length': Buffer.byteLength(JSON.stringify(params)),
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
    if (cb) return cb(data)
    res.json(data)
  })
  .catch(error => {
    console.log('<----------------------错误日志---------------------->')
    console.log(error)
    // 请求不在2**内的
    if (cb) return cb(error)
    res.json(error)
  })
}
module.exports = request
