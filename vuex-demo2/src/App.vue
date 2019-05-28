<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>账号：{{ email }}</p>
    <hr>
    <h2>产品</h2>
    <!-- 对于引入的vue文件是单标签，需要加上/  -->
    <ProductList/>  
    <hr>
    <h2>购物车</h2>
    <ShoppingCart/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import {mapState} from 'vuex'
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  computed: mapState({
    email: state => state.userInfo.email //拿到用户邮箱
  }),
  components: {
    ProductList, ShoppingCart
  },
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
