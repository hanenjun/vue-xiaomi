<template>
  <div class="orders">
    <div class="content">
      <div class="shouhuo">
        <h2>收货地址</h2>
        <ul>
          <li
            v-for="(item,index) in map"
            :key="index"
            :class="{active:active==index}"
            @click="select(index)"
          >
            <div>
              <span class="name">姓名：{{item.name}}</span>
            </div>
            <p class="bzy">手机号：{{item.phone}}</p>
            <div class="bzy">地址：{{item.map}}</div>
            <span class="xg" @click="edit(index)">修改</span>
          </li>

          <li class="add" @click="add">
            <div>
              <i class="fa fa-plus" aria-hidden="true"></i>
              <span>添加地址</span>
            </div>
          </li>
        </ul>
      </div>

      <h2 class="title">商品</h2>
      <div class="shangpin" v-for="(item,index) in cart" :key="index">
        <img
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1557977821.03156568.jpg?thumb=1&w50&h=50"
          alt
        />
        <span>{{item.title}}</span>
        <span>{{item.price}}元 x {{item.num}}</span>
        <span>{{item.price * item.num}}元</span>
      </div>
      <div class="fapiao">
        <h2>发票</h2>
        <div>
          <span>
            商品件数：
            <span>{{count}}</span>件
          </span>
          <span>
            商品总价：
            <span>{{price}}</span>元
          </span>
          <!-- <span>
            运费：
           <span> 10</span>元
          </span>-->
          <span>
            应付总额：
            <span>{{price}}</span>元
          </span>
        </div>
      </div>
      <div class="ok">
        <router-link :to="{name:'cart',params:{id:1}}">
          <button>返回购物车</button>
        </router-link>
        <button @click="goto">立即下单</button>
      </div>
    </div>
    <el-dialog title="更改地址" :visible.sync="dialogVisible" width="30%">
      <div id="map">
        <label>姓名</label>
        <input type="text" v-model="name" ref="name" />
        <br />
        <label>手机</label>
        <input type="text" v-model="phone" ref="phone" />
        <br />
        <label>地址</label>
        <input type="text" v-model="maps" ref />
        <br />
        <button @click="ok">确认</button>
        <button @click="quit">取消</button>
      </div>
    </el-dialog>
    <el-dialog title="添加地址" :visible.sync="pushmap" width="30%">
      <div id="map">
        <label>姓名</label>
        <input type="text" v-model="newname" ref="name" />
        <br />
        <label>手机</label>
        <input type="text" v-model="newphone" ref="phone" />
        <br />
        <label>地址</label>
        <input type="text" v-model="newmaps" ref />
        <br />
        <button @click="push">确认</button>
        <button @click="exit">取消</button>
      </div>
    </el-dialog>
    <el-dialog title="购物车" :visible.sync="notmap" width="30%">
      <h3>请添加地址</h3>
    </el-dialog>
  </div>
</template>

<script>
export default {
  methods: {
    goto() {
      if (this.$store.state.map[this.active]) {
        let obj = {};
        let detailobj = { map: {} };
        this.cart.forEach(item => {
          if (item.select) {
            obj.state = 1;
            obj.time = 2423423432;
            obj.name = "asas";
            obj.ordergoodsid = 1;
            obj.prices = item.price * item.num;
            detailobj.ordergoodsid = 1;
            detailobj.map.map = this.$store.state.map[this.active].map;
            detailobj.map.phone = this.$store.state.map[this.active].phone;
            detailobj.map.name = this.$store.state.map[this.active].name;
            detailobj.countprice = item.price * item.num;
          }
        });
             this.$store.dispatch("addordersAsync", obj);
        this.$store.dispatch("addorderdetailAsync", detailobj);
        this.$store.dispatch("removecartAsync");
        this.$router.push({ name: "submitted" });
      } else {
        this.notmap = true;
        setTimeout(() => {
          this.notmap = false;
        }, 500);
      }
    },
    select(index) {
      this.active = index;
    },
    add() {
      this.pushmap = true;
    },
    edit(index) {
      this.dialogVisible = true;
      this.index = index;
    },
    push() {
      let obj = {
        name: this.newname,
        phone: this.newphone,
        map: this.newmaps
      };
      this.$store.dispatch("addMapAsync", obj);
      this.pushmap = false;
    },
    exit() {
      this.pushmap = false;
    },
    ok() {
      this.oldmap = {
        name: this.name,
        phone: this.phone,
        map: this.maps,
        index: this.index
      };
      this.$store.dispatch("setMapAsync", this.oldmap);
      this.dialogVisible = false;
    },
    quit() {
      this.dialogVisible = false;
    }
  },
  data() {
    return {
      dialogVisible: false,
      name: "",
      phone: "",
      maps: "",
      newname: "",
      newphone: "",
      newmaps: "",
      oldmap: {
        name: "",
        phone: "",
        maps: "",
        index: ""
      },
      index: "",
      pushmap: false,
      active: 0,
      notmap: false
    };
  },
  created() {
    this.$store.dispatch("orderCountAsync");
    this.$store.dispatch("orderPriceAsync");
  },
  computed: {
    cart() {
      let arr = []
      this.$store.state.cart.forEach(item=>{
        if(item.select){
          arr.push(item)
        }
      })
      // return this.$store.state.cart;
      return arr
    },
    count() {
      return this.$store.state.orderCount;
    },
    price() {
      return this.$store.state.orderPrice;
    },
    map() {
      return this.$store.state.map;
    }
  }
};
</script>

<style scoped>
.orders .content .shouhuo ul .active {
  border: 1px solid #ff6700;
}
.add {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add i {
  font-size: 50px;
  font-weight: normal;
}
.add div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.add div span {
  margin-top: 15px;
}
#map {
  color: #ff6700;
  display: flex;
  flex-direction: column;
}
#map input {
  border: 1px solid #757575;
  padding-left: 15px;
  height: 20px;
}
#map button {
  margin-top: 8px;
}
.orders .content .ok {
  border-top: 1px solid #b0b0b0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 1200px;
  height: 100px;
}
.orders .content .ok button:first-child {
  background-color: #fff;
  color: #333;
  border: 1px solid #b0b0b0;
}
.orders .content .ok button {
  cursor: pointer;
  width: 150px;
  height: 35px;
  margin: 0 10px;
  background-color: #ff6700;
  outline: none;
  border: none;
  color: #fff;
}
.orders .content .fapiao div span {
  color: #757575;
  margin: 5px 0;
}
.orders .content .fapiao div span span {
  color: #ff6700;
}
.orders .content .fapiao div {
  width: 1200px;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: flex-end;
}
.orders .content .fapiao {
  display: flex;
  height: 150px;
  position: relative;
  justify-content: space-around;
  align-items: center;
}
.orders .content .fapiao h2 {
  position: absolute;
  top: 0;
  left: 0;
}
.orders .content .shangpin img {
  width: 80px;
}
.orders .content .shangpin .title {
  position: absolute;
  top: 15px;
}
.orders .content .shangpin {
  border-bottom: 1px solid #b0b0b0;
  margin-top: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100px;
}
.orders .content .shouhuo ul li .bzy {
  color: #757575;
}
.orders .content .shouhuo ul li .xg {
  color: #ff6700;
  cursor: pointer;
  bottom: 5px;
  right: 10px;
  position: absolute;
}
.orders .content .shouhuo ul li .name {
  color: #333;
}
.orders .content .shouhuo ul {
  display: flex;
  flex-direction: row;

  /* justify-content: color:;; */
}
.orders .content .shouhuo {
  border-bottom: 1px solid #b0b0b0;
  padding-bottom: 20px;
}
.orders .content .shouhuo ul li {
  cursor: pointer;
  margin: 0 15px;
  position: relative;
  padding: 10px;
  justify-content: space-around;
  border: 1px solid #b0b0b0;
  height: 180px;
  display: flex;
  flex-direction: column;
  width: 270px;
}
.orders .content h2 {
  color: #333;
  font-weight: 400;
  margin: 15px 0;
  /* border-bottom: 1px solid #333; */
}
.orders {
  width: 1226px;
  margin: auto;
}
.orders .content {
  padding: 20px;
  margin: 50px 0;
  width: 1226px;
  /* height: 500px; */
  background-color: #fff;
}
</style>