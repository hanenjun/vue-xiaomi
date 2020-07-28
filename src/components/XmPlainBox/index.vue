<template>
  <div class="xm-plain-box">
    <div class="font">
      <h2>{{title}}</h2>
      <router-link :to="{name:'showmore'}"><h3>
        查看更多
        <i class="fa fa-chevron-right"></i>
      </h3></router-link>
    </div>
    <div class="box-bd">
      <div class="left-box">
         <router-link :to="{name:'details',params:{id:1}}"><img :src="img_url" /></router-link>
      </div>
      <div class="right-box">
        <ul>
         
            <li v-for="(item,index) in goodList" :key="index">
               <router-link :to="{name:'details',params:{id:1}}">
            <router-link :to="{name:'details',params:{id:'1234'}}">
              <img :src="item.img_url" alt srcset />
              <div class="font">
                <h4 class="title">{{item.title|subLength(14)}}</h4>
                <span class="miaoshu">{{item.miaoshu|subLength(10)}}</span>
                <div class="price">{{item.price}}元起</div>
              </div>
            </router-link>
          </router-link>

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
      title: "手机",
      img_url:
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90",
      goodList: [
        {
          title: "小米10青春版",
          miaoshu: "50倍潜望变焦",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2099"
        },
        {
          title: "小米10",
          miaoshu: "骁龙865/1亿像素相机",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "3799"
        },
        {
          title: "Redmi K30 pro",
          miaoshu: "双模5G，骁龙865，弹出全面屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c1aafa589258a4d9fdf49831b457418d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2699"
        },
        {
          title: "Redmi K30 pro 变焦版",
          miaoshu: "双模5G，骁龙865，弹出全面屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cfdbce40301133a287e9e57faa37bdf.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "3799"
        },
        {
          title: "小米10 pro",
          miaoshu: "骁龙865 / 50倍变焦",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ccd09671448c4cdb4a3817f68f788662.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "4999"
        },
        {
          title: "Redmi K30",
          miaoshu: "120Hz流速屏，全速热爱",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c16238f786e4f93bdb175d7bf21aa47.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "1499"
        },
        {
          title: "Redmi K30 5G",
          miaoshu: "双模5G，120Hz流速屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/53641901fbc28cbcdb495b17fdf69e46.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "1899"
        },
        {
          title: "Redmi 8",
          miaoshu: "5000mAh超长续航",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "799"
        }
      ]
    };
  },
  filters: {
    subLength(val, val2) {
      if (val.length > val2) {
        return val.slice(0, val2) + ".....";
      } else {
        return val;
      }
    }
  }
};
</script>

<style scoped>
.xm-plain-box .right-box ul li img {
  width: 100%;
}
.xm-plain-box .right-box ul li .font {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.xm-plain-box .right-box ul li .font h4 {
  color: #333;
  text-align: center;
}
.xm-plain-box .right-box ul li .font span {
  color: #b0b0b0;
  text-align: center;
  margin: 5px 0;
}
.xm-plain-box .right-box ul li .font .price {
  font-size: 14px;
  color: #ff6700;
  text-align: center;
}
.xm-plain-box .right-box {
  right: 0;
  top: 50px;
  position: absolute;
  width: 978px;
  height: 615px;
}
.xm-plain-box .right-box ul {
  display: flex;
  flex-wrap: wrap;
  width: 978px;
  height: 615px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.xm-plain-box .right-box ul li {
  cursor: pointer;
  background-color: #fff;
  padding: 25px;
  padding-bottom: 0;
  width: 150px;
  height: 260px;
  transition: all 0.5s;
}
.xm-plain-box .right-box ul a {
  display: block;
}
.xm-plain-box .left-box img:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -10px);
}
.xm-plain-box .right-box ul li:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -10px);
}
.xm-plain-box .left-box {
  width: 234px;
  height: 615px;
}
.xm-plain-box .left-box img {
  transition: all 0.5s;
  cursor: pointer;
}
.xm-plain-box {
  position: relative;
  position: relative;
  margin: 0 auto;
  width: 1226px;
  height: 686px;
  /* background-color: red; */
}
.xm-plain-box .font {
  margin-top: 15px;
  height: 50px;
  position: relative;
  width: 1226px;
  display: flex;
  flex-direction: row;
}
.xm-plain-box .font h3 {
  cursor: pointer;

  color: #333;
  font-size: 18px;
  margin-top: 15px;
  display: inline;
  position: absolute;
  right: 50px;
}
.xm-plain-box .font h3:hover {
  color: #ff6700;
}
.xm-plain-box .font h3 i {
  width: 30px;
  height: 30px;
  /* border-radius: 50%; */
  /* background-color: #b0b0b0; */
  margin-left: px;
  text-align: center;
  line-height: 30px;
}
.xm-plain-box .font h2 {
  color: #333;
  display: inline;
  left: 100px;
}
</style>