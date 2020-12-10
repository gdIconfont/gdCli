// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
import FastClick from 'fastclick'
import './assets/responsive'
import './interceptors/interceptors'
// import './plugins/toasted'
import util from './plugins/util'

import {
  ActionSheet,
  Notify,
  Checkbox,
  RadioGroup,
  Radio,
  Popup,
  Picker,
  Switch,
  Swipe,
  SwipeItem,
  Search,
  Loading,
  Icon,
  Dialog,
  Tab,
  Tabs,
  PullRefresh,
  List,
  Col,
  Row,
  Progress,
  Divider,
  Button,
  Cell,
  CellGroup,
  CheckboxGroup,
  Form,
  Field,
  Sticky,
  Toast
} from 'vant'

Vue.use(Icon).use(Dialog).use(Checkbox).use(CheckboxGroup).use(RadioGroup)
  .use(Radio).use(Popup).use(Picker).use(Switch).use(Loading).use(Tab).use(Tabs)
  .use(PullRefresh).use(List).use(Col).use(Row).use(Progress).use(Divider).use(Button)
  .use(Cell).use(CellGroup).use(Notify).use(Search).use(ActionSheet).use(Form).use(Field)
  .use(Sticky).use(Swipe).use(SwipeItem).use(Toast)
Vue.prototype.$confirm = Dialog.confirm
Vue.prototype.$util = util
Vue.prototype.$toast = Toast

Vue.config.productionTip = false
if (module.hot) {
  module.hot.accept()
}

if ('addEventListener' in document && 'ontouchstart' in window) {
  FastClick.prototype.focus = function (targetElement) {
    targetElement.focus()
  }
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

Vue.prototype.os = (function () {
  const ua = navigator.userAgent
  const isWindowsPhone = /(?:Windows Phone)/.test(ua)
  const isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone
  const isAndroid = /(?:Android)/.test(ua)
  const isFireFox = /(?:Firefox)/.test(ua)
  const isChrome = /(?:Chrome|CriOS)/.test(ua)
  const isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua))
  // isPhone = /(?:iPhone)/.test(ua) && !isTablet,
  const isMac = /macintosh|mac os x/i.test(ua)
  const isIOS = /(?:iPhone|iPad|PlayBook)/.test(ua)
  const isWx = /micromessenger/.test(ua.toLowerCase())
  const isPc = !isIOS && !isAndroid && !isSymbian
  return {
    tablet: isTablet,
    ios: !isWx && isIOS,
    isIOS: isIOS,
    isWx: isWx,
    isMac: isMac,
    isChrome: isChrome,
    android: !isWx && isAndroid,
    pc: isWx || isPc
  }
})()

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(route => {
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
