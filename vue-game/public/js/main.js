// 创建应用的主vue实例
//创建vue实例
new Vue({
  name: 'game',
  el: '#app',
  data: state,// state是data属性。即this.$data === state
  template: `<div id="app">
  <top-bar
  :turn="turn"
  :current-player-index="currentPlayerIndex"
  :players="players"/>
  <card v-for="card of cards" :def="card.def" @play="handlePlay(card)"/>
  <transition name="hand">
    <hand :cards="testHand" v-if="!activeOverlay" @card-play="testPlayCard"/>
  </transition>
</div>`,
  methods: {
    handlePlay(card) {
      //console.log('You played a card!')
      this.$emit('card-play', card)
    },
    //测试hand组件
    createTestHand(){
      const cards = [];
      //遍历卡牌的id
      const ids = Object.keys(cards)
      //抽取5张卡牌
      for(let i = 0; i < 5; i++){
        cards.push(this.testDrawCard())
      }
      return cards;
    },
    testDrawCard() {
      // 使用 id 随机选取一张卡牌
      const ids = Object.keys(cards)
      const randomId = ids[Math.floor(Math.random() * ids.length)] // 返回一张新的卡牌
      return {
        // 玩家抽取卡牌的唯一标识符 
        uid: cardUid++, 
        // 定义的id
        id: randomId,
        // 定义对象
        def: cards[randomId],
      }
    },
    //将卡牌从手牌中移除
    testPlayCard(card){
      const index = this.testHand.indexOf(card)
      this.testHand.splice(index, 1)
    }
  },
  computed: {
    testCard(){
      return cards.archers
    },
  },
  //使用钩子函数初始化hand
  created(){
    this.testHand = this.createTestHand()
  },
  
})

//窗口大小变化的处理
//当窗口大小变化时，通过state更新比例值
window.addEventListener('resize', () => {
  state.worldRatio = getWorldRatio()
})