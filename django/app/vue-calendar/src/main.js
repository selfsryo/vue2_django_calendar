import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = (url, opts) => fetch(url, opts)
Vue.prototype.$httpHoliday = 'http://127.0.0.1:8000/api/holiday/'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
