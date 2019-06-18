<!-- 整个组件文件入口 -->
<template>
  <div id="app">
    <div id="nav">
      <router-link event="mouseover"  to="/">Home</router-link> |
      <router-link event="mouseover"  to="/about">About</router-link> | 
      <router-link event="mouseover"  to='/document'>Document</router-link>
      <!-- router-link 设置tag属性可以生成对应的标签 -->
    </div>
    <router-view/>
  </div>
</template>

<style>
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

 #nav a {
  font-weight: bold;
  color: #2c3e50;
} 

#nav a.router-link-exact-active {
  color: #42b983;
} 
/* li{
  list-style: none;
  float: left;
  margin-left: 10px;
  background-color: #ccc;
} */
</style>
