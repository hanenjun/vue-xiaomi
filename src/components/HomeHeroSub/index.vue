<template>
  <div class="row">
    <div class="span4">
      <ul>
        <li v-for="(item,index) in imgListTop" :key="index">
          <router-link :to="{name:'details',params:{id:1}}">
            <img :src="item.img_url" />
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="span16">
      <ul>
        <li v-for="(item,index) in imgList" :key="index">
          <router-link :to="{name:'details',params:{id:1}}">
            <img :src="item" alt />
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
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/fbff319c7dd00e75c9758acf248d3784.jpg?w=632&h=340"
      ],
      imgListTop: [
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48",
          title: "话费充值"
        },
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48",
          title: "以旧换新"
        },
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48",
          title: "米粉卡"
        },
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48",
          title: "F码通道"
        },
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48",
          title: "企业团购"
        },
        {
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48",
          title: "小米秒杀"
        }
      ]
    };
  }
};
</script>

<style scoped>
.row {
  display: flex;
  width: 1226px;
  height: 170px;
  margin: 0 auto;
  margin-top: 35px;
}
.row .span4 {
  width: 234px;
  height: 170px;
  background-color: #5f5750;
  /* margin-left: 10px; */
}
.row .span4 ul {
  width: 234px;
  height: 170px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.row .span4 ul li,
.row .span4 ul li a {
  /* border: 1px solid; */
  cursor: pointer;
  width: 76px;
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.row .span4 ul li img {
  margin-bottom: 10px;
  width: 24px;
  height: 24px;
}
.row .span4 ul li span {
  font-size: 12px;
  color: #fff;
}
.row .span16 {
  width: 978px;
  height: 170px;
  margin-left: 15px;
}
.row .span16 ul {
  width: 978px;
  height: 170px;
  display: flex;
  justify-content: space-between;
}
.row .span16 ul li img,
.row .span16 ul li {
  cursor: pointer;
  width: 316px;
  height: 170px;
}
</style>