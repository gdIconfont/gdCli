import Vue from 'vue'
let timer = null
Vue.prototype.$toast = (tips, time) => {
  let toastedEle = document.querySelector('.v-toasted')
  if (toastedEle) {
    toastedEle.querySelector('.v-toasted-tips').innerHTML = tips
    clearTimeout(timer)
    timer = setTimeout(() => {
      document.body.removeChild(toastedEle)
      clearTimeout(timer)
      timer = null
    }, time || 1500)
    return
  }
  const toastedTpl = document.createElement('div')
  toastedTpl.className = 'v-toasted'
  toastedTpl.innerHTML = `<div class="v-toasted-tips mobile">${tips}</div>`
  document.body.appendChild(toastedTpl)
  timer = setTimeout(() => {
    document.body.removeChild(toastedTpl)
    clearTimeout(timer)
    timer = null
  }, time || 1500)
  document.querySelector('.v-toasted').addEventListener('click', function () {
    clearTimeout(timer)
    timer = null
    document.body.removeChild(this)
  })
}
