<template>
  <div class="xm-plain-box">
    <div class="font">
      <h2>{{title}}</h2>
      <h3>
        <span :class="{color:activeid==item.id}" v-for="(item,index) in classifyList" @mouseenter="classify(item.id)" :key="index">{{item.title}}</span>
      </h3>
    </div>
    <div class="box-bd">
      <div class="right-box">
        <ul>
          <li v-show="item.classifyid==activeid" v-for="(item,index) in goodList" :key="index">
             <router-link :to="{name:'details',params:{id:1}}">
            <img :src="item.img_url" alt srcset />
            <div class="font">
              <h4 class="title">{{item.title}}</h4>
              <span class="miaoshu">{{item.miaoshu|subLength(10)}}</span>
              <div class="price">{{item.price}}元起</div>
            </div>
             </router-link>
          </li>
          <router-link :to="{name:'viewmore'}">
             <li class="gd">
            <div class="font">
              <h4 class="title">查看更多</h4>
              <span class="miaoshu">电视影音</span>
              <div class="price"><i class="fa fa-hand-o-right"></i></div>
            </div>
          </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "家电",
      img_url:
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90",
      goodList: [
        {
          title: "红米电视 70英寸",
          miaoshu: "4K画质，细腻如真",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2999",
          classifyid:1
        },
         {
          title: "小米电视全面屏",
          miaoshu: "全面屏设计",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "699",
          classifyid:1
        }, {
          title: "小米全面屏电视E55A",
          miaoshu: "人工智能",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "1599",
          classifyid:1
        },
         {
          title: "米家空调",
          miaoshu: "出众静音",
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200",
          price: "1499",
          classifyid:1
        },
         {
          title: "米家互联网洗烘一体机",
          miaoshu: "省心省力",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2999",
          classifyid:1
        },
         {
          title: "Redmi全自动洗衣机",
          miaoshu: "一键操作",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "749",
          classifyid:1
        },
         {
          title: "15.6 四核i7",
          miaoshu: "全面均衡轻薄本",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd2aa2dcad6440b469c22e27db9b6236.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "4699",
          classifyid:1
        },
         {
          title: "小米米家智能门锁",
          miaoshu: "一步推拉",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0baacf6e54cbf89cab2c543cc02344e9.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "1499",
          classifyid:1
        },
         {
          title: "小米电饭煲",
          miaoshu: "立体加热",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "249",
          classifyid:1
        },
                {
          title: "小米电视4C",
          miaoshu: "高清液晶屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3483b4ec83f3d085c567633f2edef1c1.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "599",
          classifyid:2
        },
         {
          title: "全面屏电视E55X",
          miaoshu: "潮流全面屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f193daba3989eadac5e13ae102b91582.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "1599",
          classifyid:2
        }, {
          title: "小米电视4A 70英寸",
          miaoshu: "大屏更享受",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9d8674cd21c486feff5328772ab9cf01.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2999",
          classifyid:2
        },
         {
          title: "小米电视4C 43英寸",
          miaoshu: "FHD全高清屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8156dec11073b1f98db8e4b7598262a4.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "988",
          classifyid:2
        },
         {
          title: "小米电视4S 75英寸",
          miaoshu: "4K HDR",
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7e2127506fd2209f3115828404269d45.jpg?thumb=1&w=200&h=200",
          price: "3799",
          classifyid:2
        },
         {
          title: "小米全面屏 E65C",
          miaoshu: "震撼大屏",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6a3d09cb5b895f8c3706f513552cd53d.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2399",
          classifyid:2
        },
         {
          title: "小米电视E32c",
          miaoshu: "全面屏设计",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "6999",
          classifyid:2
        },
          {
          title: "红米电视 70英寸",
          miaoshu: "4K画质，细腻如真",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "2999",
          classifyid:2
        },
         {
          title: "小米电视全面屏",
          miaoshu: "全面屏设计",
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90",
          price: "699",
          classifyid:2
        },
      ],
      classifyList:[
        {id:1,title:'家电'},
        {id:2,title:'电视影音'}
      ],
      activeid:1,
      showid:'',
      active:''
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
  },
  methods:{
    classify(id){
        this.activeid = id
    }
  }
};
</script>

<style scoped>
.xm-plain-box .right-box ul .gd {
  cursor: pointer;
  background-color: #fff;
  padding: 30px;
  padding-bottom: 0;
  width: 150px;
  height: 260px;
  transition: all 0.5s;
}
.xm-plain-box .right-box ul .gd:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -10px);
}
.xm-plain-box .right-box ul .gd .font {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
}
.xm-plain-box .right-box ul .gd .font h4 {
  color: #333;
  text-align: center;
  font-size: 25px;
}
.xm-plain-box .right-box ul .gd .font span {
  color: #b0b0b0;
  font-size: 20px;
  text-align: center;
  margin: 15px 0;
}
.xm-plain-box .right-box ul .gd .font .price {
  color: #ff6700;
  
  text-align: center;
  font-size: 80px;
}



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
  width: 1226px;
  height: 615px;
}
.xm-plain-box .right-box ul {
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  width: 1226px;
  height: 615px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.xm-plain-box .right-box ul li {
  background-color: #fff;
  padding: 30px;
  padding-bottom: 0;
  width: 150px;
  height: 260px;
  transition: all 0.5s;
}
.xm-plain-box .right-box ul li:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transform: translate(0, -10px);
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
.xm-plain-box .font h3 span{
  margin: 0 10px;
}
.xm-plain-box .font h3 .color{
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