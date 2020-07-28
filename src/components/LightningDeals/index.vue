<template>
  <div class="Lightning-Deals">
    <h2>小米闪购</h2>
    <div class="button">
      <span @click="last">
        <i class="fa fa-chevron-left"></i>
      </span>
      <span @click="next">
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
    <div class="row">
      <div class="box-bd">
        <div>10:00 场</div>
        <img
          src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ%0AbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp%0Abj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6%0AeD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1%0AMTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo%0AdHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw%0AdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv%0AIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS%0AZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD%0AcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j%0AZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1%0AbWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N%0AOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy%0AQzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF%0AOEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht%0AcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE%0AcHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf%0AS48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY%0AjRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN%0AJbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL%0AijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7%0AKnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L%0AbN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc%0AxDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V%0AkBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU%0AKc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E%0AcnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ%0A7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII="
        />
        <div class="desc">距离开始还有</div>
        <ul>
          <li>{{hour}}</li>
          <span>:</span>
          <li>{{minute}}</li>
          <span>:</span>
          <li>{{second}}</li>
        </ul>
      </div>
      <div class="swiper-no-swiping">
        <ul ref="ul" :style="{transform: `translate(-${py}px)`}">
          <li v-for="(item,index) in shopList" :key="index">
            <router-link :to="{name:'details',params:{id:1}}">
              <img :src="item.img_url" alt srcset />
            <div class="font">
              <p>{{item.title|subLength(12)}}</p>
              <p class="desc">{{item.miaoshu}}</p>
              <div class="price">
                <span class="xianj">{{item.xianj}}</span>
                <span class="yuanj">{{item.yuanj}}</span>
              </div>
            </div>
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
      shopList: [
        {
          yuanj: "89元",
          xianj: "79元",
          miaoshu: "解放双手，定格更美镜头",
          title: "小米支架式自拍杆 雅黑色",
          img_url:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1577951165.19164817.jpg?thumb=1&w=200&h=200"
        },
        {yuanj:"169",xianj:"99",miaoshu:'听音乐，遥控家电',title:"小米小爱音响",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560230039.28979252.jpg?thumb=1&w=200&h=200"},
        {yuanj:"2298",xianj:"1999",miaoshu:'点火排烟，风随火动',title:"烟灶套装（天然气）",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560232653.29021311.jpg?thumb=1&w=200&h=200"},
        {yuanj:"4449",xianj:"3999",miaoshu:'十代酷睿更强劲',title:"Redmi14 i5/8G/512G",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566878924.36539833.jpg?thumb=1&w=200&h=200"},
        {yuanj:"32.9",xianj:"27.9",miaoshu:'精选原生竹浆',title:"MIHOY抽纸青春版 24包/箱",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1571038766.41824452.jpg?thumb=1&w=200&h=200"},
        {yuanj:"169",xianj:"129",miaoshu:'双核全千兆A1200路由器',title:"小米路由器4A千兆版",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1552376822.09637089.jpg?thumb=1&w=200&h=200"},
        {yuanj:"2499",xianj:"1699",miaoshu:'600加仑通量，流速更快',title:"小米净水器600G白色",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1555486031.585971.jpg?thumb=1&w=200&h=200"},
        {yuanj:"4799",xianj:"4499",miaoshu:'让性能全面展现',title:"RedmiBook 13 i5 8G 512G",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575878438.17548919.jpg?thumb=1&w=200&h=200"},
        {yuanj:"199",xianj:"99",miaoshu:'校园生活好半路',title:"米兔儿童书包2 小号 浅粉色",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1545878132.6273191.jpg?thumb=1&w=200&h=200"},


        {yuanj:"3999",xianj:"3799",miaoshu:'骁龙865 / 270Hz触控采样率',title:"腾讯黑鲨游戏手机3",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1582886424.06778856.jpg?thumb=1&w=200&h=200"},
        {yuanj:"599",xianj:"399",miaoshu:'震撼嘹亮 音智同享',title:"小米小爱音箱HD 深灰色",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1545618934.94888069.jpg?thumb=1&w=200&h=200"},
        {yuanj:"24.9",xianj:"16.9",miaoshu:'一喷清新，快速祛味',title:"小卫质品祛味喷雾 白色",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583119944.97394383.jpg?thumb=1&w=200&h=200"},
        {yuanj:"799",xianj:"649",miaoshu:'5000mAh超长续航',title:"Redmi 8A 4GB+64GB 耀夜黑 64GB",img_url:"//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1574763053.46429660.jpg?thumb=1&w=200&h=200"},
      ],
      py: 0,
      time: [],
      length: "",
      hour: 3,
      minute: 55,
      second: 60
    };
  },
  beforeDestroy(){
      this.time.forEach(item=>{
          clearInterval(item)
      })
  },
  methods: {
    play() {
      this.length = this.shopList.length * 175;
      this.time[0] = setInterval(() => {
        this.py += 700;
        if (this.py > this.length - 600) {
          this.py = 0;
        }
      }, 3000);
    },
    timePlay() {
      this.time[1] =   setInterval(()=>{
            this.second--
            if(!this.second){
                this.second = 59
            }
        },1000)
         this.time[2] =   setInterval(()=>{
            this.minute--
            if(!this.minute){
                this.minute = 59
            }
        },60000)
        this.time[3] =    setInterval(()=>{
            this.hour--
             if(!this.hour){
                alert('开始了')
            }
        },60000*60)
    },
    last() {
      clearInterval(this.time[0]);
      if (this.py) {
        this.py -= 700;
      }
      this.play();
    },
    next() {
      clearInterval(this.time[0]);
      if (this.py < this.length - 700) {
        this.py += 700;
      }
      this.play();
    }
  },
  created() {
    this.timePlay();
    this.play();
  },
  mounted() {},
  filters:{
    subLength(val,val2){
      if(val.length>val2){
      return val.slice(0,val2)+'.....'
      }else{
        return val
      }
    }
  }
};
</script>

<style scoped>
.Lightning-Deals {
  position: relative;
  width: 1226px;
  height: 358px;
  margin: 0 auto;
  margin-top: 15px;
}
.Lightning-Deals h2 {
  display: inline-block;
  font-weight: 100;
  color: #333;
  margin-top: 8px;
}
.row {
  width: 1226px;
  height: 358px;
  display: flex;
}
.row .box-bd {
  margin-top: 15px;
  border-top: 1px solid #e53935;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  width: 234px;
  height: 300px;
}
.row .box-bd div:first-child {
  color: #ef3a3b;
  font-size: 21px;
  margin-top: 20px;
}
.row .box-bd .desc {
  /* margin-top: 1px; */
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
}
.row .box-bd ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 50px;
  width: 168px;
  height: 46px;
}
.row .box-bd ul li {
  background-color: #605751;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 24px;
}
.row .box-bd ul span {
  font-size: 30px;
  width: 20px;
  height: 100%;
  color: #605751;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 46px;
}
.row .swiper-no-swiping {
  overflow: hidden;
  /* border: 1px solid #b0b0b0; */
  border-left: none;
  margin-top: 15px;
  width: 978px;
  height: 300px;
  /* background-color: green; */
}
.row .swiper-no-swiping ul {

  transition: all 1s;
  /* overflow: hidden; */
  display: flex;
  /* width: 978px; */
  height: 300px;
  /* justify-content: center; */
  align-items: center;
}
.row .swiper-no-swiping ul li {
  border-top: 1px solid #83c44e;
  margin-left: 15px;

  background-color: #fff;
  display: flex;
  height: 300px;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.row .swiper-no-swiping ul li img {
  margin-bottom: 30px;
  width: 160px;
  height: 160px;
}
.row .swiper-no-swiping ul li .price {
  width: 100%;
  text-align: center;
}
.row .swiper-no-swiping ul li p {
  color: #212121;
  font-size: 14px;
}
.row .swiper-no-swiping ul li .desc {
  text-align: center;
  margin: 10px 0;
  font-size: 12px;
  color: #b0b0b0;
}
.row .swiper-no-swiping ul li .xianj {
  color: #ff6709;
  text-align: center;
  margin: 0 8px;
}

.row .swiper-no-swiping ul li .yuanj {
  color: #b0b0b0;
  text-decoration: line-through;
}
.button {
  position: absolute;
  right: 15px;
  top: 15px;
}
.button span i {
  color: #b0b0b0;
}
.button {
  width: 60px;
  /* border: 1pc; */
  height: 24px;
  height: 30px;
  display: flex;
  flex-direction: row;
  border: 1px solid #e0e0e0;
}
.button span i {
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 33px;
  line-height: 30px;
  height: 30px;
}
.button span i:hover {
  color: #ff6709;
}
</style>