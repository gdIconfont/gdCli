const express = require('express')
const router = express.Router()
const request = require('./request')
const URL = require('url')

function getUserKsbdInfo (urlParams, req, res) {
  return request({
    url:'/yxx/getUserKsbdInfo.jsmeb',
    token:urlParams.appToken,
    baseUrl:urlParams.appUrl,
    params:[urlParams.appUser,true,urlParams.appId],
    next: true
  },req, res)
}

//拦截器
router.all('*', async function (req, res, next) {
  if (req.url == "/favicon.ico") return res.end();
  const urlParams = URL.parse(req.url, true).query
  if (urlParams.token || urlParams.appToken) {
    req.session.user = {}
    let fontUrl = ''
    let params = []
    if (urlParams.appToken){
      const data = await getUserKsbdInfo(urlParams, req, res)
      if (data && data.result) {
        if (!data.result.apiUrl) {
          res.json({
            status:200,
            result:{
              code:0,
              msg:'请先进行账号绑定'
            }
          })
        } else {
          if (data.result.apiToken) {
            req.session.user = {
              token:data.result.apiToken,
              userId:data.result.ksh,
              userName:data.result.xm,
              baseUrl:urlParams.appUrl
            }
          }
        }
      }
    }
    for (var i in urlParams) {
      if (i == "fontUrl") {
      	fontUrl = '#/' + urlParams[i]
      	continue;
      }
      req.session.user[i] = urlParams[i]
      if (~['token', 'name', 'appToken', 'appUrl', 'xm', 'openid', 'appId', 'appUser'].indexOf(i)) continue
      if (i == "unionid") {
        i = 'bindUnionid'
        urlParams[i] = 1
      }
      params.push(i + '=' + urlParams[i])
    }
    const url = URL.parse(req.url).pathname + fontUrl + '?' + params.join('&');
    res.redirect('.' + url)
    // next()
  } else if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
    // 表示通过ajax请求
    const data = (req.method === 'GET' ? req.query : req.body)
    if (data.next) {
      // 含有next，转到特殊处理
      next()
    } else {
      if (data.unionid && data.data && data.data.length > 0) {
        if (!req.session.user.unionid) {
          res.json({
            code: '-1',
            msg: '获取unionid失败'
          })
          return
        }
        data.data[0] = req.session.user.unionid
      }
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
    const fontUrl = urlParams.fontUrl
    const query = []
    if (fontUrl || urlParams.unionid || urlParams.openid) {
      if (!req.session.user) req.session.user = {}
      delete urlParams['fontUrl']
      for (let key in urlParams) {
        req.session.user[key] = urlParams[key]
        if (!~['unionid', 'openid'].indexOf(key)) query.push(`${key}=${urlParams[key]}`)
      }
    }
    if (fontUrl) {
      const pathname = URL.parse(req.url).pathname
      res.redirect(`.${pathname}?${query.join('&')}#/${fontUrl}`)
    } else {
      next()
    }
  }
})

router.get('/', function (req, res) {
  res.render('./index.html')
})

// 特殊处理的请求
/* router.get('/user/login', function (req, res) {
  res.end('end')
}) */

router.post('/user/login.jsmeb', function (req, res) {
  request({
    url: req.url,
    params: req.body.data,
    next: true
  }, req, res).then(data => {
    console.log('data', data)
    if (data && data.result) {
      if (data.result.lu) {
        try {
          const lu = JSON.parse(data.result.lu)
          req.session.user = {
            token: lu.token || '',
            userId: lu.userid
          }
          res.json({
            result: {
              code: '0',
              rows: lu
            }
          })
        } catch (e) {
          res.json({
            result: {
              code: '-1',
              msg: '登录异常'
            }
          })
        }
      } else {
        res.json({
          result: {
            code: '-1',
            msg: '登录异常'
          }
        })
      }
    } else {
      res.json(data)
    }
  })
})

router.post('/gzjkm/tb/getKsTest', function (req, res) {
  let data = req.body.data
  if (Object.prototype.toString.call(data) === '[object Array]') {
    if (req.session.user) {
      data.push(req.session.user.unionid || '')
    } else {
      data.push('')
    }
  }
  request({
    url: req.url,
    params: data
  }, req, res)
})
module.exports = router
