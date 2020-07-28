<template>
  <div id="app">
    <router-view></router-view>
    <home-tool-bar></home-tool-bar>
  </div>
</template>
<script>
import HomeToolBar from './components/HomeToolBar/index';
export default {
  data() {
    return {};
  },
  components: {
    HomeToolBar
  }
};
</script>
<style>
.el-dialog__wrapper .el-dialog .el-dialog__header {
  display: none !important;
}
#app {
  
}
a{
  color: #333;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
