import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
//import shop from '../api/shop'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: 'welkin@wenqing.com' //2.1 在state上声明
  },
  getters: {
   // shops
  },
  mutations: {
    
  },
  actions: {

  },
  modules: {
    products,
    cart
  }
})
