//top-bar 箭头  从state中拿到数据
Vue.component('top-bar', {
  template:`<div class="top-bar" :class="'player-' + currentPlayerIndex">
  <div class="player p0">{{ players[0].name}}</div>
  <div class="turn-counter">
    <img class="arrow" src="svg/turn.svg">
    <div class="turn">{{ turn }}</div>
  </div>
  <div class="player p1">{{ players[1].name}}</div>
</div>`,
  props:['players', 'currentPlayerIndex', 'turn'],
  created() {
    console.log(this.players)
  }
})

// card组件 从card中拿到数据  用来显示对手在上一张显示的牌
Vue.component('card', {
  props: ['def'],
  template: `<div class="card" :class="'type-' + def.type" v-on:click="play">
    <div class="title">{{ def.title }}</div>
    <img class="separator" src="svg/card-separator.svg">
    <div class="description">
      <div v-html="def.description"></div>
    </div>
    <div class="note" v-if="def.note">
      <div v-html="def.note"></div>
    </div>
  </div>`,
  methods:{
    play() {
      this.$emit('play')
    }
  },
})

//hand 手牌组件（存放现有的5张卡牌，并且负责展示卡牌的动画）
Vue.component('hand', {
  props:['cards'],
  template:`<div class="hand">
  <div class="wrapper">
    <transition-group name="card" tag="div" class="cards">
      <card v-for="card of cards" :def="card.def" :key="card.uid" @play="handlePlay(card)"/>
    </transition-group>
  </div>
</div>`,
  // methods: {
    
  // }
})