import Vue from "vue"

new Vue({
  el: "#app",
  render: h=>h("div", "hello world")  //h 是 createElement 的别名，这是编写 JSX 时非常常见和必需的。
})