<template>
  <div class="site-header">
    <div class="content">
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
      <div class="header-nav">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            @mouseenter="selectStyle('Show',item.category)"
            @mouseleave="selectStyle('hidden',item.category)"
          >{{item.title}}</li>
        </ul>
      </div>
      <div class="header-search">
        <input type="text" v-model="keyWord" @focus="keylist(true)" @blur="keylist(false)" />
        <button @click="search">
          <i class="fa fa-search fa-2x"></i>
        </button>
        <div class="keyWord-list" v-show="keyWordl">
          <ul class="result-list">
            <li v-for="(item,index) in keyWordList" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="header-nav-menu"
      :class="{'header-nav-menu-select':active}"
      @mouseenter="selectStyle('Show',categoryId)"
      @mouseleave="selectStyle('hidden',categoryId)"
    >
      <div class="container">
        <ul>
            <li v-show="item.category == categoryId" @click="go(item.shopid)" v-for="(item,index) in shopList" :key="index">
            <img :src="item.img_url" />
            <div class="bottom">
              <div>{{item.title}}</div>
              <div>{{item.price}}元起</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { category: 1, title: "小米手机" },
        { category: 2, title: "Redmin" },
        { category: 3, title: "电视" },
        { category: 4, title: "笔记本" },
        { category: 5, title: "家电" },
        { category: 6, title: "路由器" },
        { category: 7, title: "智能硬件" },
        { category: 8, title: "服务" },
        { category: 9, title: "社区" }
      ],
      keyWord: "",
      active: "",
      shopList: [
        {
          category: 1,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3bf20f1df3f2e22c5b29ff07634f3c59.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米10 青春版 5G",
          price: 2099,
          shopid:1
        },
        {
          category: 1,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米10  Pro",
          price: 4999,
          shopid:2
        },
        {
          category: 1,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米10",
          price: 3999,
          shopid:3
        },
        {
          category: 1,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110",
          title: "小米CC9",
          price: 1499,
          shopid:4
        },
        {
          category: 1,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png?thumb=1&w=160&h=110",
          title: "小米CC9e",
          price: 1299,
          shopid:5
        },
        {
          category: 1,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png?thumb=1&w=160&h=110",
          title: "小米cc9 美图定制版",
          price: 1999,
          shopid:6
        },
        {
          category: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cfbedb76699240a6c9a3f875b930983c.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin 10x 4G",
          price: "999",
          shopid:7
        },
        {
          category: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a6548361871303764d6c66142074524.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin 10x 5G",
          price: "1599",
          shopid:8
        },
        {
          category: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0203f4e7dafcc0c9016a1b48556abf30.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin k30 pro",
          price: "2999",
          shopid:9
        },
        {
          category: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e95616fd1620e469386f007eeab1c763.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmi k30 pro 变焦版",
          price: "3799",
          shopid:10
        },
        {
          category: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin k30",
          price: "1699",
          shopid:11
        },
        {
          category: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Rwdmi k30 5G",
          price: "1999",
          shopid:12
        },
        {
          category: 3,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin 智能电视 MAX 98",
          price: "19999",
          shopid:13
        },
        {
          category: 3,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0f2d1079c767a834f098dd824bb6fee.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米电视4A 60英寸",
          price: "2199",
          shopid:14
        },
        {
          category: 3,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/70f6c0c28c61e8585805565e5e16da84.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin 电视x55",
          price: "2299",
          shopid:15
        },
        {
          category: 3,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmin 电视 70英寸 R70A",
          price: "2999",
          shopid:16
        },
        {
          category: 3,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=160&h=110",
          title: "小米壁画电视 65英寸",
          price: "6999",
          shopid:17
        },
        {
          category: 3,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&w=160&h=110",
          title: "小米全门派电视 E555A",
          price: "1749",
          shopid:18
        },
        {
          category: 4,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3e6c9a677acbb3b0c75d4d0d83e8a695.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "RedmiBook 16 锐龙版",
          price: "3799",
          shopid:19
        },
        {
          category: 4,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e27b3211230c2b8c21c0ef4efcbc17bc.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "RedmiBook 14 II 锐龙版",
          price: "3799",
          shopid:20
        },
        {
          category: 4,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b5ffee3ecc822e9f85039df2d0ad68d.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "RedmiBook 13 锐龙版",
          price: "3799",
          shopid:21
        },
        {
          category: 4,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6abc701fb3cf48f2c7a3fd5ef053529a.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "RedmiBook 13",
          price: "4499",
          shopid:22
        },
        {
          category: 4,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d712f71b3c4a3b562601c2b956a660ad.png?thumb=1&w=160&h=110",
          title: "小米笔记本pro",
          price: "5899",
          shopid:23
        },
        {
          category: 4,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a25f895ad6019c3fae32fd1f48a2c7c.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "RedmiBook 14",
          price: "3999",
          shopid:24
        },
        {
          category: 5,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/03dc85cd792904ddc8027b2d781beed8.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "米家互联网空调c1",
          price: "2099",
          shopid:25
        },
        {
          category: 5,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e06b219c5bced9256467b17738a943c6.png?thumb=1&w=160&h=110",
          title: "米家互联网空调",
          price: "2699",
          shopid:26
        },
        {
          category: 5,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c5d772b7c2a159c3ed7d4e31bd293f18.jpg?thumb=1&w=160&h=110",
          title: "Redmi全自动波轮洗衣机1A",
          price: "779",
          shopid:27
        },
        {
          category: 5,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/11b8bca444aba2994fe852993eac9203.png?thumb=1&w=160&h=110",
          title: "米家互联网洗烘一体机10Kg",
          price: "2099",
          shopid:28
        },
        {
          category: 5,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b7a4e3ff7919ca2407ad970b78abd09a.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "米家风冷对开门冰箱483L",
          price: "2299",
          shopid:29
        },
        {
          category: 5,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/40ad6e8398095e97309a5538b516a2de.jpg?thumb=1&w=160&h=110&f=webp&q=90",
          title: "米家两门冰箱 160L",
          price: "929",
          shopid:30
        },
        {
          category: 6,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27da43294889d049a111e5ff2cdfafe7.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米路由器AX1800",
          price: "329",
          shopid:31
        },
        {
          category: 6,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/359d3c63cc159949d8fe147a11b4bc40.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米Alot路由器AX3600",
          price: "599",
          shopid:32
        },
        {
          category: 6,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aa1e0a4860cf40d34e1192d86691c82c.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmi路由器AC2100",
          price: "169",
          shopid:33
        },
        {
          category: 6,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5dd23c09b7eb6471968537fdce629194.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "小米路由器AC2100",
          price: "229",
          shopid:34
        },
        {
          category: 6,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ec5be5f93ac0118aeec27b8df4337fc9.jpg?thumb=1&w=160&h=110",
          title: "小米路由器Mesh",
          price: "999",
          shopid:35
        },
        {
          category: 6,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/026a28fc18eff2cfa4d26a799a2da9cc.jpg?thumb=1&w=160&h=110",
          title: "小米路由器4A千兆版",
          price: "129",
          shopid:36
        },
        {
          category: 7,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2a500be4264c692899b25d86c16403f7.jpg?thumb=1&w=160&h=110",
          title: "小米米家智能摄像头云台版",
          price: "199",
          shopid:37
        },
        {
          category: 7,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e3fb0886fdb13e5ae784b9713b9a0038.jpg?thumb=1&w=160&h=110",
          title: "小米小爱老师",
          price: "499",
          shopid:38
        },
        {
          category: 7,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5630aa997c82409ee33b2814c7eb2244.jpg?thumb=1&w=160&h=110",
          title: "小米米家智能门锁",
          price: "1299",
          shopid:39
        },
        {
          category: 7,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dccc32d8e36685485fa89e0f2a580975.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmi小爱触屏音响 8 ",
          price: "149",
          shopid:40
        },
        {
          category: 7,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f6e585a4bf5c0f744ca60f19ecd6fadf.jpg?thumb=1&w=160&h=110",
          title: "小米小爱触屏音响",
          price: "1999",
          shopid:41
        },
        {
          category: 7,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/17c0c91317ec0def3ecc072fa9480192.png?thumb=1&w=160&h=110&f=webp&q=90",
          title: "Redmi小爱音响play",
          price: "79",
          shopid:42
        }
      ],
      categoryId: "",
      keyWordList: [
        "Redmi 10X 5G 系列",
        "Redmi K30 Pro",
        "摄像头",
        "投影仪",
        "压力IH电饭煲",
        "全部商品",
        "米家插线板 快充版 27W",
        "Redmi 手环",
        "小米10 Pro",
        "蓝牙耳机"
      ],
      keyWordl: false,
      keywords:''
    };
  },
  methods: {
    go(id){
      this.$router.push({path:`/detail/${id}`})
    },
    search() {
      this.$router.push({
        name:'search',
        params:{
          id:this.keyWord
        }
      })
    },
    selectStyle(val, categoryId) {
      let i = 0;
      this.shopList.forEach(item => {
        if (item.category == categoryId) {
          i++;
        }
      });
      if (!i) {
        return;
      }
      this.categoryId = categoryId;
      if (val == "Show") {
        this.active = true;
      } else if (val == "hidden") {
        this.active = false;
      }
    },
    keylist(val) {
      this.keyWordl = val;
    }
  },
  mounted(){
  let  clicks =  document.querySelectorAll('.header-logo ul li')
  clicks.forEach(item=>{
    item.addEventListener('click',()=>{
      this.$router.push({name:'home'})
    })
  })
  }
};
</script>
<style scoped>
.site-header {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content {
  position: relative;
  margin: 0 auto;
  width: 1226px;
  height: 100px;
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-logo {
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
  background-image: url(../../assets/logo.png);
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
  background-image: url(../../assets/mi-logo.png);
}
.header-logo:hover ul {
  left: 0px;
}
.header-nav {
  width: 850px;
  height: 100px;
}
.header-nav ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around;; */

  align-items: center;
  width: 850px;
  height: 100px;
  margin-left: 190px;
}
.header-nav ul li {
  /* width: 60px; */
  cursor: pointer;
  font-size: 16px;
  padding: 0 15px;
}
.header-nav ul li:hover {
  color: #ff6700;
}
.header-search {
  width: 280px;
  position: absolute;
  right: 0;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.header-search button {
  cursor: pointer;
  border-left: none;
  outline: none;
  /* margin-left: 1px; */
  /* background-color: #ff6700; */
  width: 37px;
  height: 37px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
  transition: all 0.2s;
}
.header-search:hover input,
.header-search:hover button {
  border-color: #b0b0b0;
  /* border-left: none; */
}
.header-search input:focus {
  border-color: #ff6700;
  /* border-left: none; */
}
.header-search input:focus + button {
  border-color: #ff6700;
  border-left: none;
}
.header-search .fa-search {
  color: #616161;
  font-size: 16px;
}
.header-search input {
  transition: all 0.2s;
  outline: none;
  padding-left: 10px;
  width: 230px;
  border: 1px solid #e0e0e0;
  height: 35px;
}
.header-nav-menu {
  z-index: 9999;
  transition: all 0.5s;
  overflow: hidden;
  position: absolute;
  top: 100px;
  width: 100%;
  height: 0px;
  background-color: #fff;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.18);
}
.header-nav-menu-select {
  height: 250px;
}
.header-nav-menu .container {
  width: 1226px;
  height: 206px;
  margin: 0 auto;
  /* background-color: red; */
}
.header-nav-menu .container ul ,.header-nav-menu .container ul a {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.header-nav-menu .container ul li {
  cursor: pointer;
  width: 180px;
  height: 186px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
}
.header-nav-menu .container ul li div div {
  font-size: 14px;
  text-align: center;
  line-height: 20px;
}
.header-nav-menu .container ul li div div:last-child {
  color: #ff6700;
}
.keyWord-list {
  width: 242px;
  position: absolute;
  top: 69px;
  left: 0px;
  z-index: 999;
}
.keyWord-list ul {
  border: 1px solid #ff6700;
  border-top: none;
  background-color: #fff;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 242px;
}
.keyWord-list ul li {
  cursor: pointer;
  margin-top: 10px;
}
.keyWord-list ul li:last-child {
  margin-bottom: 10px;
}
</style>