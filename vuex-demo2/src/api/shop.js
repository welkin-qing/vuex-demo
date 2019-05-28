//商品信息
const _products =[
  {"id": 1, "title": "华为 Mate 20", "price": 3999, "inventory": 2},
  {"id": 2, "title": "小米 9", "price": 2999, "inventory": 1},
  {"id": 3, "title": "OPPO 19", "price": 1999, "inventory": 5}
]

export default{
  getProducts(cb){
    setTimeout(() => cb(_products), 100)
  },
  //购买商品
  buyProducts (products, cb, errorCb){
    setTimeout(() => {
      Math.random() > 0.5 ? cb() : errorCb()
    }, 100)
  },
  //清空商品
  clearProducts(products){
    setTimeout(() =>{
      return products
    }, 100)
  }
}