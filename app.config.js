var pack = require('./package.json')
var appConfig = {
  baseUrl: 'http://demo2.gdtech.com.cn:8707/yyjo_1806', // 服务端请求地址
  outerUrl: 'http://demo2.gdtech.com.cn:8707/yyjo_1806', // 外网地址
  imgUrl: 'http://demo2.gdtech.com.cn:8707/yyjo_1806', // 图片地址
  poxcyPath: '/njs_3333',
  version: pack.version,
  nginx: false
}
module.exports = appConfig;