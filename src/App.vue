<template>
  <div id="app">
    <router-view name="left" class="left"></router-view>
    <router-view name="right" class="right"></router-view>
   
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  display:flex;
  
}
#app .left{
  width:20vw;
  height:100vh;
  border:2px solid red;
  padding-top:30px;
  background:black;
}
#app .right{
  flex:1;
  border:2px solid blue;
}
#app a{
  text-decoration:none;
}
</style>
