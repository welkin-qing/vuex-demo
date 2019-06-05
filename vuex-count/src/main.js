import Vue from 'vue'
import Vuex from 'vuex'// 引入vuex
import App from './App.vue'

Vue.use(Vuex) //在vuex中可以访问到vue
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,  //1. 用于计数（初始值）
  },
  mutations: {  //store上用于接受commit
    increment(state) {
      state.count++
    }
    // increment(state, n){
    //   state.count+=n
    // }
  },
  actions: {//异步操作，第一个参数类似于state
    increment({commit}) {
      setTimeout(()=>{
        // state.count++ // 不要对state进行更改操作，应该通过commit交给mutations去处理
        commit('increment')
      }, 3000)
    }
    //和上面方法一样
    // increment({state}){
    //   setTimeout(()=>{
    //     state.count++
    //   },3000)
    // }
  },
  getters: {  //提供缓存的效果（和计算属性性质一样）
    doubleCount(state) {
      return state.count * 2
    }
  }
})

new Vue({
  store,//2. 可以访问到store
  render: h => h(App),
}).$mount('#app')