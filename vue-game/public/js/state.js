//存放应用的主要数据
// Some usefull variables
var maxHealth = 10
var maxFood = 10
var handSize = 5
var cardUid = 0
var currentPlayingCard = null

// 应用状态集合
var state = {
  //世界 // 将游戏中的对象调整为该比例（界面和对象缩放为原始尺寸的百分比）来适配浏览器窗口
  worldRatio: getWorldRatio(),
  // 游戏
  turn: 1,// 当前会合数
  players: [ //玩家对象
    {name: '美国队长',},
    {name: '奇异博士'}
  ],
  currentPlayerIndex: Math.round(Math.random()),  //当前玩家在players数组中的索引，随机生成1/0来决定谁先行动
  //testHand: [],//临时属性
  //用户界面
  activeOverlay: null,
  //testHand: [],
  cards: [],
}
