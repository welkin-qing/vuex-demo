<template>
  <div class="productlist">
    <h3>产品列表</h3>
    <table class="table table-hover table-bordered">
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>余量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop,index) in shoplist">
          <td>{{ shop.title }}</td>
          <td>{{ shop.price }}</td>
          <td>{{ shop.inventory }}</td>
          <td>
            <button class="btn btn-success" @click="addToCart(shop)">加入购物车</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default{
 name: 'product',
  data(){
    return {
      // shopList: [
      //   {"id": 1, "title": "华为 Mate 20", "price": 3999, "inventory": 2},
      //   {"id": 2, "title": "小米 9", "price": 2999, "inventory": 0},
      //   {"id": 3, "title": "OPPO R17", "price": 2999, "inventory": 5}
      // ]
    }
  },
  computed: {//从cart中getterss拿到shoplist
    ...mapGetters(['shoplist'])
  },
  methods: {  //调用cart.js中actions的addToCart方法
    ...mapActions(['addToCart'])
  }
}
</script>