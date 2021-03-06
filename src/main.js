import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'

import 'element-ui/lib/theme-chalk/index.css'

// axios.defaults.baseURL = ''
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.seesionStorage.getItem('token')
//   return config
// })
if (process.env.MOCK) {
  require('@/mock/index.js')
}
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
