// 引入shop.js文件
import shop from '../../api/shop'  

const state = {
  all: []
  //products: shop
}
const mutations = {  //store上用于接收commit的
  setProducts (state, products){
    state.all = products
  }
}
export default {
  state,
  mutations
}