<template>
    <div class="oder">
           <div class="header">
      <div class="nb">
        <div class="header-logo">
          <ul>
            <li>
              <a class="logo"></a>
            </li>
            <li>
              <a class="logo-mi"></a>
            </li>
          </ul>
        </div>
        <h1>我的购物车</h1>
      </div>
    </div>
        <ConfirmAnOrder></ConfirmAnOrder>
        <Footer></Footer>
    </div>
</template>

<script>
import ConfirmAnOrder from '../components/ConfirmAnOrder/index'
import Footer from '../components/Footer';

export default {
    components:{
        ConfirmAnOrder,
        Footer
    },
     mounted() {
    let clicks = document.querySelectorAll(".header-logo ul li");
    clicks.forEach(item => {
      item.addEventListener("click", () => {
        this.$router.push({ name: "home" });
      });
    });
  },
}
</script>

<style scoped>
.oder{
    width: 100%;
    background-color: #f5f5f5;
}
.header {
  height: 100px;
  width: 100%;
  background-color: #fff;
}
.header .nb {
  padding-top: 18px;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 1226px;
  height: 100px;
  margin: 0 auto;
}
.header div h1 {
  margin-left: 50px;
  display: inline-block;
  font-weight: normal;
}

.header-logo {
  /* position: absolute; */
  top: 15px;
  left: 100px;
  width: 55px;
  height: 55px;
  background-color: #ff6700;
}
.header-logo ul {
  list-style: none;
  display: flex;
}
.header-logo ul li {
  cursor: pointer;
}
.header-logo .logo {
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-image: url(../assets/logo.png);
}
.header-logo ul {
  width: 55px;
  /* overflow: hidden; */
  height: 55px;
  position: absolute;
  left: -55px;
  transition: all 0.3s;
}
.header-logo .logo-mi {
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-image: url(../assets/mi-logo.png);
}
.header-logo:hover ul {
  left: 0px;
}
</style>