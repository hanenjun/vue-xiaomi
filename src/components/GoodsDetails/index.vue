<template>
  <div class="detail">
    <ul class="img">
      <transition-group name="flip-list" tag="ul">
        <li v-for="curImg in currImgs" v-bind:key="curImg" class="list-item">
          <img :src="curImg" />
        </li>
      </transition-group>
    </ul>
    <div class="xiangqing">
      <h3>{{chapin.title}}</h3>
      <div class="miaoshu">{{chapin.miaoshu}}</div>
      <h4>{{chapin.price}} 元</h4>
    </div>
    <div>
      <div class="map">
        <el-cascader :options="options" v-model="mapvalue" v-show="xs"></el-cascader>
        <p>
          {{mapvalue}}
          <span
            v-show="mapvalue!='请选择'"
            style="color: #ff6700;margin-left:15px; cursor:pointer;"
            @click="qxs"
          >修改</span>
        </p>
      </div>
      <div class="option">
        <h3>选择版本</h3>
        <div class="banben">
          <span
            :class="{active:banben==index?true:false}"
            v-for="(item,key,index) in chapin.banben"
            :key="index"
            @click="activebanben(index,item[1])"
          >{{item[0]}}</span>
        </div>
        <h3>选择颜色</h3>
        <div class="banben">
          <span
            :class="{active:color==index?true:false}"
            v-for="(item,index) in chapin.color"
            @click="activecolor(index)"
            :key="index"
          >{{item}}</span>
        </div>
      </div>
    </div>
    <div class="price">
      <span>
        Redmi 10X 4G 4GB+128GB 天际蓝
        <span>{{chapin.price}}元</span>
      </span>
      <h2>总计：{{price}}元</h2>
    </div>
    <div class="cart">
      <div class="addcart" @click="addcart">加入购物车</div>
      <div class="like">喜欢</div>
    </div>

    <el-dialog title="购物车" :visible.sync="dialogVisible" width="30%">
      <h3>{{title}}</h3>
    </el-dialog>
  </div>
</template>

<script>

export default {
  watch: {
    mapvalue: {
      handler: function(val) {
        this.mapvalue = val.join("-");
        this.xs = false;
      },
      deep: true
    }
  },
  data() {
    return {
      select: {},
      dialogVisible: false,
      xs: true,
      mapvalue: "请选择",
      currImgs: [],
      imgs: [
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590371358.21527215.jpg",
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590371358.21491245.jpg",
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590371358.21491245.jpg",
        "https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590371358.21527215.jpg"
      ],
      chapin: {
        title: "Redmi 10X 4G",
        miaoshu:
          '「新品现货热卖中！享延保、碎屏保5折；赠价值470元善诊体检卡」5020mAh超长续航+18W快充+最高9W反向充电 /128GB大内存 / 4800万超清四摄 /Helio G85游戏芯 /6.53"小孔全面屏 /指纹识别+人脸解锁 /红外遥控',
        price: 1999,
        banben: { 0: ["4GB+128GB", 300], 1: ["6GB+128GB", 500] },
        color: ["天际蓝", "冰雾白"]
      },
      price: "",
      banben: 0,
      color: 0,
      map: "北京北京市海淀区清河街道修改有现货",
      options: [
        {
          value: "山东",
          label: "山东",
          disabled: false,
          children: [
            {
              value: "济南",
              label: "济南",
              children: [
                {
                  value: "天桥",
                  label: "天桥"
                },
                {
                  value: "槐荫",
                  label: "槐荫"
                },
                {
                  value: "市中",
                  label: "市中"
                }
              ]
            }
          ]
        }
      ],
      title:''
    };
  },
  props: ["id"],
  created() {

    this.price = this.chapin.price;
  },
  methods: {
    addcart() {
      if(this.$store.state.user.isLogin){
      if (this.mapvalue != "请选择") {
        this.select.title = this.chapin.title;
        this.select.price = this.price;
        this.select.banben = this.chapin.banben[this.banben][0];
        this.select.color = this.chapin.color[this.color];
        this.select.map = this.mapvalue;
        this.select.id = this.$route.params.id
        this.select.num = 1
        this.select.select  = true
        this.$store.dispatch('addCartAsync',this.select)
        this.title = '添加成功'
      }else{
        this.title = '请选择地址'
      }
      this.dialogVisible = true;
      setTimeout(() => {
        this.dialogVisible = false;
      }, 500);
    }else{
      this.title='请登入'
      this.dialogVisible = true;
      setTimeout(() => {
        this.dialogVisible = false;
        this.$router.push({
          name:'login'
        })
      }, 500);
    }
    },
    qxs() {
      this.xs = true;
    },
    activebanben(index, price) {
      this.banben = index;
      this.price = this.chapin.price + price;
    },
    activecolor(index) {
      this.color = index;
    },
    startChange: function() {
      var _this = this;
      setInterval(function() {
        if (_this.index < _this.imgs.length - 1) {
          _this.index++;
        } else {
          _this.index = 0;
        }
        _this.currImgs.splice(0, 1, _this.imgs[_this.index]);
      }, 1000);
    }
  },
  mounted: function() {
    this.currImgs = [this.imgs[0]];
    this.startChange();
  },
  components:{
   
  }
};
</script>

<style scoped>
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 0.5s;
}
.flip-list-enter,
.flip-list-leave-active {
  opacity: 0;
}
.detail .cart .like {
  cursor: pointer;
  width: 142px;
  height: 54px;
  background-color: #757575;
  color: #fff;
  text-align: center;
  line-height: 54px;
  margin-right: 100px;
}
.detail .cart {
  display: flex;
  justify-content: space-between;
  width: 600px;
  position: absolute;
  left: 560px;
  top: 750px;
  height: 54px;
}
.detail .cart .addcart {
  cursor: pointer;
  width: 300px;
  height: 54px;
  background-color: #f25807;
  color: #fff;
  text-align: center;
  line-height: 54px;
}
.detail .price {
  background-color: #f9f9fa;
  padding: 20px;
  position: absolute;
  width: 600px;
  height: 86px;
  left: 560px;
  top: 600px;
}
.detail .price span {
  position: relative;
  display: block;
  width: 600px;
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  color: #333;
}
.detail .price span span {
  display: block;
  position: absolute;
  right: -500px;
  top: 0;
}
.detail .price h2 {
  color: #ff6700;
  font-weight: 400;
  font-size: 24px;
  padding-top: 20px;
}
.detail .option {
  position: absolute;
  left: 560px;
  top: 330px;
  width: 600px;
  height: 246px;
}
.detail .option h3 {
  margin: 8px 0;
  color: #333;
  font-weight: 400;
}
.detail .option .banben {
  cursor: pointer;
  width: 600px;
  height: 60px;
}
.detail .option .banben span {
  text-align: center;
  line-height: 44px;
  display: block;
  width: 264px;
  margin: 10px 15px;
  height: 44px;
  float: left;
  color: #757575;
  border: 1px solid #e0e0e0;
}
.detail .option .banben .active {
  color: #ff6700;
  border: 1px solid #ff6700;
}
.detail {
  position: relative;
  width: 1226px;
  margin: 0 auto;
  height: 900px;
  display: flex;
  flex-direction: row;
}
.detail .map {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 80px;
  position: absolute;
  top: 200px;
  left: 560px;
  width: 600px;
  height: 104px;
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
}
.detail .img {
  display: flex;
  flex-direction: row;
  width: 606px;
  overflow: hidden;
}
.detail .img img {
  width: 606px;
}
.detail .img {
  width: 560px;
  height: 560px;
}
.detail .xiangqing {
  width: 600px;
}
.detail .xiangqing h3 {
  margin: 8px;
  color: #212121;
  font-size: 24px;
  font-weight: 400;
}
.detail .xiangqing .miaoshu {
  margin-top: 15px;
  line-height: 23px;
  font-size: 15px;
  color: #b0b0b0;
}
.detail .xiangqing h4 {
  padding: 20px 0;
  color: #ff6700;
  border-bottom: 1px solid #e0e0e0;
}
</style>