<template>
  <div id="app">
    {{count}}
    <br>
    <!-- 获取getters -->
    {{$store.getters.doubleCount}}
    <!-- 改变store上到数据 -->
    <button @click="$store.commit('increment')">count++</button>
    <!-- <button @click="$store.commit('increment',2)">count++</button> -->
   <!-- 使用dispatch调用actions -->
    <button @click="$store.dispatch('increment')">count++</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {  //通过计算属性访问到count
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
</style>