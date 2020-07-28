<template>
  <div class="ViewMore">
    <div class="swiper">
      <div class="block">
        <el-carousel height="620px">
          <el-carousel-item v-for="item in imgList" :key="item">
           <router-link :to="{name:'details',params:{id:1}}"> <img :src="item" /></router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item ,index) in shopList" :key="index">
          <router-link :to="{name:'details',params:{id:1}}">
          <img
            :src="item.img_url"
            alt
            srcset
          />
          <div class="left">
            <h4>{{item.title}}</h4>
            <span>{{item.miaoshu}}</span>
          </div>
          <div class="right">
            <h3><span><p>{{item.price}}</p>元</span></h3>
          </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aba2d8f2a2d11f06eb35a79f1bfe60b9.jpg?w=5120&h=1240&bg=D5D6D9",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0c29c67a79668528f4e28f21a212e3d.jpg?w=5120&h=1240&bg=D1E3FB",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ab79cd25a2057949266b61ec9792a8b.jpeg?w=5120&h=1240&bg=D0E10"
      ],
      shopList:[
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95b15e37e66fe63c75e77b96dc4151d1.png?w=1212&h=716',title:'小米手环4',price:'169',miaoshu:'大屏彩显'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3fd0883175842695d7e6167275edffd1.jpg?w=1212&h=716',title:'小爱老师',price:'144',miaoshu:'英语题分'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fbf25d159d32ef5b74489410ac240e6.jpg?w=1212&h=716',title:'米家吸油烟机',price:'1699',miaoshu:'点火排烟'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/74c29d41e250d42030f11f0eb6b4cb8c.jpg?w=1212&h=716',title:'小爱万能音箱',price:'149',miaoshu:'传统家电秒变智能'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1d1f4e286c290a87354b865a47b411ce.jpg?w=1212&h=716',title:'小米小爱音箱 Play',miaoshu:'听音乐、语音遥控家电 ',price:'99'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/69c62261d712a99edc5230a9cf50b990.jpg?w=1212&h=716',title:'小米智能门锁 推拉式',miaoshu:'一步推拉，高端智能门锁 ',price:'1699'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/dfbc9b64ae92de1905c1e0721c955469.jpg?w=1212&h=716',title:'米家电饭煲4L',miaoshu:'890W 立体加热  ',price:'269'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7169ada94c7be7cb8eba058e1383c5f.jpg?w=1212&h=716',title:'米家电烤箱',miaoshu:'全能烘焙体验 ',price:'299'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bca664bde8023567c86deb2c5939c1ee.jpg?w=1212&h=716',title:'空调（1.5匹/变频/三级能效）',miaoshu:'变频，快速制冷热 ',price:'1899'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/457263d26ccb0c8b23ed2f4fc78aa634.jpg?w=1212&h=716',title:'米家洗烘一体机',miaoshu:'智能烘干，高效净衣 ',price:'2099'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/80319115980df09cdea5bc861911bdd5.jpg?w=1212&h=716',title:'米家扫地机器人',miaoshu:'智商高，扫得干净扫得快 ',price:'1399'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5683098dbfd5b212ace02b5d8d3e95ad.jpg?w=1212&h=716',title:'小米净水器（厨下式）',miaoshu:'400加仑大流量，隐藏安装 ',price:'1299'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7711a0fd5f02ab833a09cd76416a2a66.jpg?w=1212&h=716',title:'米家空气净化器Pro',miaoshu:'大空间，快循环 ',price:'1299'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4538afd2acb66c1b0d5442c2d52a1368.jpg?w=1212&h=716',title:'空调（大1匹/定频/三级能效）',miaoshu:'出众静音，快速制冷热 ',price:'1499'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6deddfcea4a9400679a71484fc98265.jpg?w=1212&h=716',title:'小米净水器1A（厨下式）',miaoshu:'小身材节省空间，大流量直出纯净水 ',price:'1099'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fb9fc0f45533935beba6a7d884159bd3.jpg?w=1212&h=716',title:'米家空气净化器 2S',miaoshu:'好空气看得见 ',price:'748'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/327b126304119a9d11b18defb36456ca.jpg?w=1212&h=716',title:'小米智能摄像机云台版',miaoshu:'高清画质，守护家的每一面 ',price:'189'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/3a4043f93f54cf6c2c32cc2a24f33fe6.jpg?w=1212&h=716',title:'米家声波电动牙刷',miaoshu:'高效动力，刷的干净 ',price:'199'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1d3faf7c9ce4dcb53863b5fcffb758a0.jpg?w=1212&h=716',title:'九号平衡车',miaoshu:'年轻人的酷玩具 ',price:'1999'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a587b7bbd33ce2a1afc25b07496daad5.jpg?w=1212&h=716',title:'米家水离子吹风机',miaoshu:'快速吹干，深度补水 ',price:'199'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e88267f1f0dac93774ece121b02fd4d.jpg?w=1212&h=716',title:'米家投影仪',miaoshu:'三秒自动对焦，好用又好看 ',price:'3399'},
          {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a6deddfcea4a9400679a71484fc98265.jpg?w=1212&h=716',title:'小米净水器1A（厨下式）',miaoshu:'小身材节省空间，大流量直出纯净水 ',price:'1099'},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7711a0fd5f02ab833a09cd76416a2a66.jpg?w=1212&h=716',title:'米家空气净化器Pro',miaoshu:"大空间，快循环 ",price:"1299"},
          {img_url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a8c7e3865faf62114919b8921ee2edb1.jpg?w=1212&h=716',title:'米家电磁炉',miaoshu:"双频火力，精准控温 ",price:"269"},

      ]
    };
  }
};
</script>

<style scoped>
.content ul,
.content {
  width: 1226px;
  margin: 0 auto;
}
.content ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.content ul li img {
  width: 100%;
}
.content ul li .left h4 {
  position: absolute;
  bottom: 70px;
  font-size: 24px;
  color: rgba(51, 51, 51, 0.9);
  font-weight: normal;
}
.content ul li .left {
  display: inline-block;
  width: 400px;
  margin-left: 25px;
  height: 140px;
  position: relative;
}
.content ul li .right h3{
    position: absolute;
    top: 200px;
    right: 65px;
}
.content ul li .right p{
    display: inline;
    font-size: 25px;
}
.content ul li .right {
    color: #ff6700;

  display: inline-block;
  position: absolute;
  top: -120px;
  /* margin-left: 25px; */
  height: 140px;
  width: 150px;
  position: relative;
}
.content ul li .left span {
  position: absolute;
  bottom: 50px;
  color: rgba(51, 51, 51, 0.7);
  font-size: 14px;
}
.content ul li {
    transition: all .5s;
  position: relative;
  width: 580px;
  height: 482px;
  background-color: #fff;
  margin: 10px;
}
.content ul li:hover{
     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate(0,-10px);
}
.ViewMore .swiper .block {
  width: 100%;
  height: 620px;
}
.ViewMore .swiper .block img {
  height: 620px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>