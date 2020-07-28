<template>
  <div class="order">
    <h1>我的订单</h1>
    <ul class="dingdna">
      <li :class="{active:item.state==active}" v-for="(item,index) in state" :key="index" @click="select(item.state)">{{item.title}}</li>
    </ul>
    <ul class="content">
      <li v-for="(item,index) in orders" :key="index" v-show="item.state==active">
        <div>
          <h2>待支付</h2>
          <div>
            <span>{{item.time}}</span>
            <span class="fgx">|</span>
            <span>{{item.name}}</span>
            <span class="fgx">|</span>
            <span>订单号：{{item.ordergoodsid}}</span>
            <div class="price">
              应付金额：
              <h1>{{item.prices}}</h1>元
            </div>
          </div>
        </div>
        <div class="xq">
          <div v-for="(item,index) in item.goods" :key="index" class="box">
             <img
            src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1557977821.03156568.jpg?thumb=1&w=80&h=80"
            alt
          />
          <span style="margin-left:25px">{{item.goodname}}</span>
          <span style="margin-left:25px">{{item.price}}元 × {{item.num}}</span>
          </div>
          <div class="btn">
            <button>立即付款</button>
            <button @click="xq(index)">订单详情</button>
            <button>联系客服</button>
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
      active: 1,
      state: [
        { title: "有效订单", state: 1 },
        { title: "待支付", state: 2 },
        { title: "待收货", state: 3 },
        { title: "无效订单", state: 4 }
      ]
    };
  },
  methods: {
    select(index) {
      this.active = index;
    },
    xq(index) {
      this.$router.push({
        name: "orderdetails",
        params: {
          id: this.orders[index].ordergoodsid
        }
      });
    }
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  }
};
</script>
<style scoped>
.active{
  color: #ff6700;
}
.order .content {
  display: flex;
  flex-direction: column;
  width: 882px;
  margin-top: 10px;
}
.order .content li {
  margin: 15px 0;
  border: 1px solid #ff6700;
}
.order {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 978px;
  background-color: #fff;
  margin: 15px;
  margin: 0 15px;
  padding: 15px;
}
.order .content div:first-child .price {
  position: absolute;
  top: 40px;
  right: 50px;
}
.order .content div:first-child {
  color: #000;
}
.order .content div:first-child .fgx {
  color: #e0e0e0;
  margin: 0 8px;
}
.order .content div:first-child .price h1 {
  color: #ff6700;
  display: inline-block;
  font-size: 28px;
}
.order .content div .box {
  position: relative;
  margin: 15px;
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: left;
  justify-content: space-around;
  border-bottom: 1px solid #ff6700;
}
.order .content div:first-child h2 {
  margin-bottom: 30px;
  font-weight: 400;
  color: #ff6700;
  font-size: 18px;
}
.order .content .xq {
  /* height: 150px; */
  display: flex;
  padding-left: 25px;
  flex-direction: column;
  /* justify-content: space-around; */
  /* align-items: center; */
}
.order .content .xq div{
  display: flex ;
  flex-direction: row;
  width: 600px;
}
.order .content .xq span{
  line-height: 80px;
}
.order .content .xq .btn {
  height: 130px;
  position: absolute;
  right: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 150px;
}
.order .content .xq .btn button:first-child {
  background-color: #ff6700;
  border: 1px solid #ff6700;
  color: #fff;
}
.order .content .xq .btn button {
  cursor: pointer;
  border: 1px solid #757575;
  background: #fff;
  color: #757575;

  width: 150px;
  height: 35px;
  outline: none;
}
.order .dingdna li{
  cursor: pointer;
}
.order .dingdna {
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-around;
  flex-direction: row;
  width: 882px;
  color: #757575;
  border-bottom: 1px solid #666;
  border-top: 1px solid #666;
}
.order h1 {
  font-weight: 400;
  margin-bottom: 10px;
}
</style>