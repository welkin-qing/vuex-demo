<template>
  <div class="cart">
    <h2>清单</h2>
    <p v-show="!products.length"><i>请添加产品到购物车</i></p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price }} x {{product.quantity }}
      </li>
    </ul>
    <p>合计：{{ total }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">提交</button></p>
    <p v-show="checkoutStatus">提交 {{checkoutStatus}}.</p>
    <p><button :disabled="!products.length" @click="clear(products)">清空购物车</button></p>
    <p v-show="clearStatus">清空 {{clearStatus}}.</p>
  </div>
</template>

<script>
  //mapGetters 类似于计算属性，起到缓存的作用
import { mapGetters, mapState } from 'vuex'  

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus,
      clearStatus: state => state.cart.clearState
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
      back: 'cartBack'
    }),
  },
  // computed: {
  //   checkoutState(){
  //     return this.$store.checkoutState.cart.checkoutState
  //   },
  //   products(){
  //     return this.$store.getters['cart/cartProducts']
  //   },
  //   total(){
  //     return this.$store.getters['cart/cartTotalPrice']
  //   }
  // },
  methods :{
    checkout (products){
      this.$store.dispatch('cart/checkout',products)
    },
    clear (products){
      //console.log('hhhh')
     this.$store.dispatch('cart/clear',products)
    }
  }
}
</script>

<style>

</style>