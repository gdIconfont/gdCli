const express = require('express')
const router = express.Router()
const request = require('./request')
const URL = require('url')

//拦截器
router.all('*', function (req, res, next) {
  const urlParams = URL.parse(req.url, true)
  if (urlParams.query.token) {
    // todo
    req.session.user = {
      token: urlParams.query.token
    }
    res.redirect('/')
  } else if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
    // 表示通过ajax请求
    const data = (req.method === 'GET' ? req.query : req.body)
    if (data.next) {
      // 含有next，转到特殊处理
      next()
    } else {
      request({
        url: req.url,
        params: data.data,
        timeout: data.timeout,
        baseUrl: data.baseUrl,
        token: data.token
      }, req, res)
    }
  } else {
    // 静态资源请求
    next()
  }
})

router.get('/', function (req, res) {
  res.render('./dist/index.html')
})

// 特殊处理的请求
router.get('/user/login', function (req, res) {
  res.end('end')
})

module.exports = router
