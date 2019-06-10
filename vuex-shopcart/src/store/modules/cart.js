import { totalmem } from "os";

const state = {
  shop_list: [
    {"id": 1, "title": "华为 Mate 20", "price": 3999, "inventory": 2},
    {"id": 2, "title": "小米 9", "price": 2999, "inventory": 0},
    {"id": 3, "title": "OPPO R17", "price": 2999, "inventory": 5}
  ],
  added: []
}

const  getters = {
  //商品列表
  shoplist: state => state.shop_list,
  // shoplist: function(state){
  //   return state.shop_list
  // }
  
  //购物车列表
  cartProducts: state => {
    return state.added.map(({id, num}) => {
      let product = state.shop_list.find( n => n.id == id)
      return {
        ...product,
        num
      }
    })
  },

  //计算总价
  totalPrice: (state, getters) => {
    var total = 0;
    getters.cartProducts.forEach( n => {
      total += n.price*n.num
    });
    return total;
  },

  //计算总数量
  totalNum: (state, getters) => {
    var total = 0;
    getters.cartProducts.forEach(n => {
      total += n.num;
    });
    return total;
  }
}

const actions = {
  addToCart({commit}, product){  //编写在product.vue中的点击button时加入购物车方法
    commit('add', {  //add为传递时的方法名，传递id,余量
      id: product.id,
      yl: product.inventory
    })
  },
  //清空购物车
  clearAll({commit}){
    commit('clear')
  },
  //删除购物车中的指定商品
  deletePro({commit}, product){
    commit('delete', {
      id: product.id
    })
  }
}

const mutations = {
  //add 添加到购物车时的操作
  add(state, {id,yl}) {
    //state中已经定义了一个数组added，用来存放已经添加到购物车的商品
    if (yl > 0) {
      yl--;
      
      let record = state.added.find(n => n.id == id);
      //console.log(record.id)
      if (!record) {
        state.added.push({
          id,
          yl: 1,
          num: 1
        })
      } else {
        record.num++
       // rocord.yl--
      }
    } else {
      alert('余量不足')
    }
    // console.info(record, state.added)
  },
  //清空
  clear(state) {
    state.added = [];
  },
  //删除
  delete(state, {id}){
    state.added.forEach((n ,i) => {
      if(n.id == id)[
        state.added.splice(i,1)
      ]
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}