<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="nav">
      <!-- <router-link :to='{name: "work"}'></router-link> |  -->
      <router-link to="/about">work</router-link> |
      <router-link to="/about/study">study</router-link> |
      <router-link to="/about/hobby">hobby</router-link>
    </div>
    <router-view></router-view>
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
</style>