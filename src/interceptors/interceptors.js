import Vue from 'vue'
import axios from 'axios'
let request = 0
let $vm = null
// 创建axios实例
const service = axios.create({
  baseURL: '.' // api 的 base_url
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
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
service.interceptors.response.use(function (response) {
  const data = response.data || {}
  // 对响应数据做些事
  request--
  if (data.result) {
    // if (data.result.code + '' !== '0') {
    //   $vm.$toast(data.result.msg || '请求异常，请稍后重试')
    // }
  } else {
    $vm.$toast('请求异常，请稍后重试')
  }
  if (data.error) {
    const message = data.error.message || data.error.msg || '请求异常，请稍后重试'
    if (message === 'Session is null') {
      if (request === 0) {
        $vm.$store.dispatch('showLoading', false)
      }
      $vm && $vm.$router && $vm.$router.replace({name: 'login'})
    }
    $vm.$toast(message)
  }
  if (request === 0) {
    $vm.$store.dispatch('showLoading', false)
    $vm = null
  }
  return data
}, function (error) {
  // 请求错误时做些事
  request--
  if (request === 0) {
    $vm.$store.dispatch('showLoading', false)
    $vm = null
  }
  return Promise.reject(error)
})

Vue.prototype.$http = function (url, data, loading = true) {
  const method = data.method || 'POST'
  delete data.method
  $vm = this
  return service({
    method,
    url,
    data,
    loading,
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
  }).then(response => response).catch(e => {

  })
}
