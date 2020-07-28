<template>
  <div class="mes">
    <div class="sidebar">
      <div class="top">
        <div class="logo">
          <img
            src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg"
            alt
          />
        <div class="font">
          <span class="name">{{user.name}}</span>
          <span class="info">早上好</span>
          <span class="infogg"><router-link :to="{name:'information'}">更改个人信息&nbsp;&gt;</router-link></span>
        </div>
        <div class="phone">
          <span>绑定手机{{user.phone}}</span>
          <span>账户安全等级：<span>普通</span></span>
        </div>
        </div>
      </div>
      <!-- <div class="botoom">

      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.phone{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100;
  right: 150px;
}
.phone span{
  color: #757575;
  margin: 10px 0;
}
.phone span span{
  color: #ff6700;
}
.mes {
  display: flex;
}
.sidebar .logo {
  width: 300px;
  height: 224px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sidebar .logo .font{
  width: 132px;
  height: 244px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}
.sidebar .logo .font span{
  margin: 5px 0;
}
.sidebar .logo .font span:first-child{
  color: #616161;
  font-size: 24px;
}
.sidebar .logo .font span.info{
  color: #b0b0b0;
  font-size: 14px;
}
.sidebar .logo .font span:last-child a{
  color: #ff6700;
  font-size: 12px;
}
.sidebar .logo img {
  width: 160px;
  height: 160px;
  border-radius: 50%;
}
.sidebar {
  width: 978px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  justify-content: center;
  align-items: center;
}
.sidebar .top {
  position: relative;
  margin: 15px 0;
  width: 882px;
  height: 224px;
  /* background-color: chartreuse; */
}

.sidebar .botoom {
  margin: 15px 0;

  width: 882px;
  height: 224px;
  background-color: chocolate;
}
</style>