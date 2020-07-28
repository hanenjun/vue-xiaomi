<template>
  <div class="container">
    <div class="site-topbar">
      <div class="topbar-nav">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link :to="{name:item.link}">{{item.title}}</router-link>
            <span>|</span>
          </li>
        </ul>
      </div>
      <div class="topbar-info">
        <ul>
          <li v-if="!user.isLogin">
            <router-link :to="{name:'login'}">登入</router-link>
          </li>
          <span  v-if="!user.isLogin">|</span>
          <li  v-if="!user.isLogin">
            <router-link :to="{name:'register'}">注册</router-link>
          </li>
          <span  v-if="!user.isLogin">|</span>
          <li v-if="user.isLogin" @click="Logout">推出登入</li>
        </ul>
      </div>
      <div
        class="topbar-cart"
        @mouseenter="selectStyle('Show')"
        @mouseleave="selectStyle('hidden')"
      >
        <i class="fa fa-shopping-cart"></i>
        <span>购物车</span>
        ({{cartNum}})
      </div>
      <div
        class="menu-content"
        :class="{'menu-content-select':active}"
        @mouseenter="selectStyle('Show')"
        @mouseleave="selectStyle('hidden')"
      >
        <span v-if="nocCrt">
          <div class="cart" v-if="good">
            <img
              src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555935546.09711490.jpg?width=60&height=60"
              alt
            />
            <div class="font">
              <span class="title">{{good.title}}</span>
              <span class="price">{{good.price}}元 × {{good.num}}</span>
            </div>
            <router-link :to="{name:'cart',params:{id:1}}"><button>去购物车看看</button></router-link>
          </div>
          <span v-if="shopcount == 0&&login">购物车中还没有商品，赶紧选购吧！</span>
          <span v-if="!login" @click="gotologin" class="gotologin">还没登陆，赶紧去登入吧！</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { title: "小米商城", link: "home" },
        { title: "MIUI" },
        { title: "IoT" },
        { title: "云服务" },
        { title: "金融" },
        { title: "有品" },
        { title: "小爱开放平台" },
        { title: "企业团购" },
        { title: "资质证照" },
        { title: "协议规则" },
        { title: "下载app" },
        { title: "Select Location" }
      ],
      active: false,
      nocCrt: true,
      cart: true
    };
  },
  methods: {
    gotologin(){
      this.$router.push({
        name:'login'
      })
    },
    Logout(){
      this.$store.dispatch('LogoutAsync')
    },
    selectStyle(val) {
      if (val == "Show") {
        this.active = true;
        // setTimeout(() => {
          this.nocCrt = true;
        // }, 300);
      } else if (val == "hidden") {
        // setTimeout(() => {
          this.nocCrt = false;
        // }, 0);
        this.active = false;
      }
    }
  },
  computed:{
    login(){
      return this.$store.state.user.isLogin
    },
    good(){
      return this.$store.state.cart[0]
    },
    cartNum(){
      return this.$store.state.count
    },
    user(){
       return this.$store.state.user
    },
      shopcount(){
       return this.$store.state.count
    }
  }
};
</script>

<style scoped>
.cart img {
  position: absolute;
  left: 15px;
  top: -15px;
  width: 100px;
}
.cart .title {
  position: absolute;
  right: 130px;
  top: 10px;
}
.cart .price {
  position: absolute;
  right: 20px;
  top: 10px;
  color: #ff6709;
}
.cart button {
  width: 100px;
  height: 30px;
  cursor: pointer;
  outline: none;
  border: none;
  position: absolute;
  background: #ff6709;
  right: 5px;
  color: #fff;
}
.site-topbar {
  margin: 0 auto;
  position: relative;
  width: 1226px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}
.topbar-nav {
  width: 705px;
  height: 40px;
}
.topbar-nav ul {
  width: 705px;
  height: 40px;
  display: flex;
  list-style: none;
}
.topbar-info {
  width: 142px;
  height: 40px;
}
.topbar-info ul {
  width: 142px;
  height: 40px;
  display: flex;
  list-style: none;
}
.topbar-nav ul li a,
.topbar-info ul li,
.topbar-info ul li a {
  cursor: pointer;
  color: #b0b0b0;
  line-height: 40px;
  font-size: 12px;
}
.site-topbar ul span,
.topbar-info ul span {
  line-height: 40px;
  margin: 0 0.3em;
  color: #424242;
}
.site-topbar ul li a:hover {
  color: #fff;
}
.topbar-info ul li:hover {
  color: #fff;
}
.topbar-cart {
  width: 120px;
  height: 40px;
  background-color: #424242;
  color: #b0b0b0;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
}

.fa-shopping-cart {
  margin-top: 8px;
  width: 20px;
  height: 20px;
  color: #b0b0b0;
}
.menu-content {
  position: relative;
  z-index: 999999;
  background-color: #fff;
  width: 350px;
  background-color: red;
  margin-top: 40px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  /* display: none; */
  height: 0;
  transition: all 0.3s;
  overflow: hidden;
}
.menu-content span {
  /* display: none; */
}
.menu-content-select {
  display: flex;
  /* display: flex; */
  padding-top: 10px;

  height: 80px;
}

.menu-content span {
  color: #000;
  font-size: 12px;
}
.container {
  width: 100%;
  height: 40px;
  background-color: #333;
}
.gotologin{
  cursor: pointer;
}
</style>