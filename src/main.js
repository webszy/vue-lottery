import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  const s = document.createElement('script')
  s.src = 'https://cdn.jsdelivr.net/npm/vconsole@3.3.4/dist/vconsole.min.js'
  document.body.appendChild(s)
  s.onload = function () {
    new window.VConsole()
  }
}
new Vue({
  render: h => h(App),
}).$mount('#app')

