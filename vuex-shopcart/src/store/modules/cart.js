import { totalmem } from "os";
import { stat } from "fs";

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
        ...product, //  取出参数对象product中所有可遍历属性，拷贝到当前对象中 == object.assign(目标对象，源对象) 后面的会覆盖前面的
        num  //数量
      }
    })
    //console.log(state)
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
    //console.log(index)
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
  // add(state, {id,yl}) {
  //   //state中已经定义了一个数组added，用来存放已经添加到购物车的商品
  //   if (yl > 0) {
  //     yl--;
      
  //     let record = state.added.find(n => n.id == id);
  //     if (!record) {
  //       state.added.push({
  //         id,
  //         yl: 1,
  //         num: 1
  //       })
  //     } else {
  //       record.num++
  //       record.yl++
  //      // console.log(yl)
  //     }
  //   } else {
  //     alert('余量不足')
  //   }
  //   // console.log(record, state.added)
  // },
  add(state, {id, yl}){
    let product = state.shop_list.find( n => n.id == id)
   //s console.log(product.title)
    //对余量进行判断
    if(yl>0){
      yl --;
      // 设置一个记录
      product.inventory = yl
      let record = state.added.find(n => n.id == id)
      if(!record){  //如果在这个数组中没有这个商品，则需要初始化
        state.added.push({
          id,
          num: 1,
          yl
        })
      }else{
        record.num++
        yl
      }
    }else{
      alert('余量不足')
    }
  },
  //清空
  clear(state) {
    if (state.added.length > 0) {
      var msg = confirm('确定清空？')
      if (msg) {
        let product = state.shop_list
        let added = state.added
        // console.log(state.added)
        for (let i = 0; i < product.length; i++) {
          for (let j = 0; j < added.length; j++) {
            if (product[i].id == added[j].id) {
              product[i].inventory = product[i].inventory + added[j].num
            }
          }
        }
        // console.log(product)
        //将已选商品列表清空  
        state.added = [];
        // 将产品列表复原
        state.shop_list = product;
      } else {
        return false;
      }
    } else {
      alert('购物车为空！')
    }
  },
  //删除
  delete(state, {id}){
    
    let product = state.shop_list.find( n => n.id == id)
    //console.log(product)
    state.added.forEach((n ,i) => {
      if(n.id == id){
        //console.log(id);
        //console.log(product.title)
        product.inventory = product.inventory + state.added[i].num
        state.added.splice(i,1)
    }
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}