import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  const s = document.createElement('script')
  s.src = 'https://cdn.jsdelivr.net/npm/vconsole@3.3.4/dist/vconsole.min.js'
  document.body.appendChild(s)
  s.onload = function () {
    new window.VConsole()
  }
}

Vue.use(Toast)
Vue.use(VModal, { dialog: true });
new Vue({
  render: h => h(App),
}).$mount('#app')

