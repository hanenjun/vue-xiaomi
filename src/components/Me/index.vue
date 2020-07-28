<template>
  <div class="me">
    <div class="content">
        <!-- <div class="crumbs">首页/个人信息/</div> -->
        <div class="left">
            <router-link :to="{name:'information'}">个人信息</router-link>
            <router-link :to="{name:'order'}">订单管理</router-link>
        </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    components:{
      
    }
};
</script>

<style scoped>
.crumbs{
    height: 50px;
    width: 1226px;
    position: absolute;
    top: 15px;
    left: 10px;
    color:#757575 ;
}
.me .content  .left {
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  width: 234px;
  height: 200px;
  background-color: #fff;
}
.me .content  .left a{
    margin: 10px 0;
    color: #333;
}
.me .content {
    position: relative;
  padding: 50px 0;

  display: flex;
  width: 1226px;
  flex-direction: row;
}
.me {

  width: 1226px;
  margin: 50px auto;
  /* height: 100px; */
  /* background-color: red; */
}
</style>