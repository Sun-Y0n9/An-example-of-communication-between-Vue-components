<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
	margin: 0;
	padding: 0;
  user-select: none;
}
html,body,#app{
  height: 100%;
}

.count{
    width: 150px;
    height: 55px;
    display: inline-block;
    line-height: 55px;
    padding-left: 15px;
    border:1px solid #dcdcdc;
    margin-top: 10px;   
    box-sizing: border-box;
    border-radius: 10px;
}
</style>
