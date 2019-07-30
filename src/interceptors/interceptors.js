import Vue from 'vue'
import axios from 'axios'
let request = 0
let $vm = null
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.method.toUpperCase() === 'GET' ? delete config.data : delete config.params
  // 在发送请求之前做某事
  request++
  $vm.$store.dispatch('showLoading', true)
  return config
}, function (error) {
  // 请求错误时做些事
  request--
  if (request === 0) {
    $vm.$store.dispatch('showLoading', false)
    $vm = null
  }
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做些事
  request--
  if (request === 0) {
    $vm.$store.dispatch('showLoading', false)
    $vm = null
  }
  return response.data
}, function (error) {
  // 请求错误时做些事
  request--
  if (request === 0) {
    $vm.$store.dispatch('showLoading', false)
    $vm = null
  }
  return Promise.reject(error)
})

Vue.prototype.$http = function (url, data) {
  const method = data.method || 'POST'
  delete data.method
  $vm = this
  return axios({
    method,
    url,
    data,
    params: data,
    timeout: data.timeout || 180000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    transformResponse: [function (data) {
      // 对 data 进行任意转换处理
      try {
        data = JSON.parse(data)
      } catch (e) {}
      return data
    }]
  }).then(response => {

  }).catch(e => {

  })
}
