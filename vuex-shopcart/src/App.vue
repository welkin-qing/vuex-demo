<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <div class="container">
      <h1>购物车示例</h1>
      <!-- 2.3 使用插值表达式拿到数据 -->
      <p>账号: {{ email }}</p>
      <hr>
      <!-- <h2>产品</h2> -->
      <!-- 在template中直接使用(使用单闭合标签和双标签都可以) -->
      <!-- <Productlist></Productlist> -->
      <Productlist/>
      <!-- <router-link to="/">ProductList</router-link> -->
      <!-- <p>{{ shop.title }}</p> -->
      <hr>
      <Cart/>
      <hr>
      <Info></Info>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
<script>
// import { mapState } from 'vuex'
// 1. 引入一个vue组件
import Productlist from "./components/ProductList.vue"; //1.1 使用import导入要在该组件中使用的子组件
import Cart from "./components/cart.vue";
import Info from "./components/info.vue";
//2. 在app.vue中引入数据
export default {
  computed: {
    //2.2 在computed中拿到定义好的数据
    email() {
      return this.$store.state.email;
    }
    // shop(){
    //   return this.$store.getters.shops
    // }
  },
  components: {
    Productlist, //1.2 在components中写入该子组件
    Cart,
    Info
  }
};
</script>

