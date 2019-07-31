var pack = require('./package.json')
var appConfig = {
  baseUrl: '', // 服务端请求地址
  outerUrl: '', // 外网地址
  imgUrl: '', // 图片地址
  poxcyPath: '/njs_3000',
  version: pack.version,
  nginx: false
}
module.exports = appConfig;