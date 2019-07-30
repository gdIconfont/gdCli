import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import(/* webpackChunkName:'login' */'../views/login.vue') // 登录
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
