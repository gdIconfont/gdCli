var appConfig = {
  baseApi: './',
  baseUrl: '', // 服务端请求地址
  outerUrl: '', // 外网地址
  imgUrl: '', // 图片地址
  poxcyPath: '/njs_3000',
}

if (typeof module === 'object' && module.exports) {
  module.exports = appConfig
} else {
  window.config = appConfig
}