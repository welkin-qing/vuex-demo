<template>
  <div>
    <h3>已选商品</h3>
    <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>名称</th>
            <th>价格</th>
            <th>数量</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(shop,index) in cartProducts">
            <td>{{ shop.title }}</td>
            <td>{{ shop.price }}</td>
            <td>{{ shop.num }}</td>
            <td>
              <button class="btn btn-danger" @click="deletePro(shop)">删除</button>
            </td>
          </tr>
          <tr v-if="!cartProducts.length">
            <td colspan="4">您的购物车空空如也。。</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex';
  export default{
    name: 'cart',
    data(){
      return{
        // cartProducts: []
      }
    },
    computed: {  //引入cart.js中的cartProduct
      ...mapGetters(['cartProducts'])
    },
    methods: {
      ...mapActions(['deletePro'])
    }
  }
</script>