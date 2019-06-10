<template>
  <div>
    <div class="item-wapper">
      <div class="item">
        总数：
        <strong>{{ totalNum }}</strong>
      </div>
      <div class="item">
        总价：
        <strong>{{ totalPrice }}</strong>
      </div>
      <div class="item btn btn-danger" @click="clearAll()">清空购物车</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'info',
  data(){
    return {
      // totalNum: 13,
      // totalPrice: 342
    }
  },
  computed: {  //从cart.js中getters拿到数据
    ...mapGetters(['totalPrice', 'totalNum'])
  },
  methods: {
    ...mapActions(['clearAll'])
  }
}
</script>

<style>
.item-wapper{
  display: flex;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
}
.item{
  flex: 1;
}
</style>