import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {post,get} from './lib/http'
require("@/lib/setSize")

if (process.env.NODE_ENV === 'development') {
  const VConsole = require("vconsole")
  new VConsole()
}





Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
