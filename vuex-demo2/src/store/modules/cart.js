import shop from '../../api/shop'
import { CART, PRODUCTS} from '../mutation-type'

// initial state
//shape: [{id, quantity }]
const state = {
  items: [],
  checkoutStatus: null,
  clearStatus: null
}

//getters
const getters = {
  //获取商品
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity}) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },

  //计算价格
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) =>{
      return total + product.price * product.quantity
    }, 0)
  },
  cartBack: (state, getters) =>{
    return getters.cartProducts
  }
}

//action
const actions = {
  checkout ({commit, state}, products) {
    const savedCartItems = [...state.items]
    commit(CART.SET_CHECKOUT_STATUS, null)
    //empty cart
    commit(CART.SET_CART_ITEMS, {items: []})
    shop.buyProducts(
      products,
      () => commit(CART.SET_CHECKOUT_STATUS, 'successful'),
      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'failed')
        commit(CART.SET_CART_ITEMS, {items: savedCartItems})
      }
    )
  },
  clear ({commit}, products){
    //const savedCartItems = [...state.items]
    commit(CART.SET_CART_ITEMS, {items: []})
    commit(CART.SET_CLEAR_STATUS, null)
    shop.clearProducts(
      products,
      () => commit(CART.SET_CLEAR_STATUS, 'successful')
    )
  },
  addProductToCart({state, commit }, product){
    commit(CART.SET_CHECKOUT_STATUS, null)
    if(product.inventory > 0){
      const cartItem = state.items.find(item => item.id === product.id)
      if(!cartItem){
        commit(CART.PUSH_PRODUCT_TO_CART, {id: product.id})
      }else{
        commit(CART.INCREMENT_ITEM_QUANTITY, cartItem)
      }
      commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, {id: product.id}, {root: true })
    }
  }
}

// mutations
const mutations = {
  [CART.PUSH_PRODUCT_TO_CART] (state, {id}){
    state.items.push({
      id,
      quantity: 1
    })
  },
  [CART.INCREMENT_ITEM_QUANTITY] (state, {id}){
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },
  [CART.SET_CART_ITEMS] (state, {items}){
    state.items = items
  },
  [CART.SET_CHECKOUT_STATUS] (state, status){
    state.checkoutStatus = status
  }
}
export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}