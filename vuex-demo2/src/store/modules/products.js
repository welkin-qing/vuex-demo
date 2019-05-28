//操作商品
import shop from '../../api/shop'
import {PRODUCTS} from '../mutation-type'

//init state
const state = {
  all: []
}

//getters
const getters = {}

//actions
const actions = {
  getAllProducts({commit}) {
    shop.getProducts(products => {
      commit(PRODUCTS.SET_PRODUCTS, products)
    })
  }
}

//mutation
const mutations = {
  [PRODUCTS.SET_PRODUCTS] (state, products){
    state.all = products
  },
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY] (state, {id}){
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}