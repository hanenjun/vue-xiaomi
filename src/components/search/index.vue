<template>
  <div class="search">
    <ul>
          <li v-for="(item,index) in shopList" :key="index">
        <img :src="item.img_url" alt srcset />
        <div class="font">
          <div class="title">{{item.title}}</div>
          <div class="price">
            <span>{{item.price}}</span>元
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

 data() {
    return {
      shopList: [
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7a4cc78dcb3b77372c600aa28291ad3b.jpg",
          title: "小米曲面显示器 34英寸 黑",
          price: "1999"
        },
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f49389dea28b178aff9d6b9a15d753f7.jpg",
          title: "小米显示器 23.8英寸",
          price: "699"
        },
        {
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583999999.50692398.jpg",
          title: "小米显示器1A 23.8英寸 黑色",
          price: "679"
        },
        {
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583999999.50692398.jpg",
          title: "小米显示器1A 23.8英寸 黑色",
          price: "679"
        },
         {
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583999999.50692398.jpg",
          title: "小米显示器1A 23.8英寸 黑色",
          price: "679"
        },
      ]
    };
  }
};
</script>

<style scoped>
.search {
  width: 1226px;
  margin: 0 auto;
margin-top: 15px;

}
.search ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 1226px;
  margin: 0 auto;
}
.search ul li {
    display: flex;
  width: 296px;
  align-items: center;
  flex-direction: column;
  height: 383px;
  margin:  10px 5px;
  background: #fff;
  transition: all .3s;
}
.search ul li img{
    margin-top: 25px;
    width:200px ;
}
.search ul li .font{
    color: #424242;
    margin-top: 25px;
    width: 100%;
    text-align: center;
}
.search ul li .font div:first-child{
    margin-bottom: 10px;
}
.search ul li .font span{
    color:#ff6700 ;
    margin-right: 10px;
}
.search ul li:hover{
    transform: translate(0,-15px);
}
</style>