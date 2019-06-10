import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'

import $ from 'jquery'
import 'jquery/dist/jquery.js'
import '../node_modules/bootstrap3/dist/css/bootstrap.css'
// import 'bootstrap3/dist/js/bootstrap.js'
// import  '../node_modules/_jquery@3.4.1@jquery/dist/jquery'
// import '../node_modules/bootstrap3/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
