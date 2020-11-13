import Vue from 'vue'
import VueRouter from 'vue-router'
const login = () => import(/* webpackChunkName: 'login' */'@/views/login.vue')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location)
}

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
