<template>
  <div class="order-details">
    <div class="top">
      <div class="title">订单详情请谨防钓鱼链接或诈骗电话</div>
      <div class="code">订单号：{{orderdetail.ordergoodsid}}</div>
      <div class="btn">
        <button>取消订单</button>
        <button>立即付款</button>
      </div>
    </div>
    <div class="fgx"></div>
    <div class="bottom">
      <div class="title">等待付款</div>
      <div class="miaoshu">14分后订单将被关闭</div>
      <div class="good" v-for="(item,index) in orderdetail.goods" :key="index">
        <img
          src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1590373152.66442089.jpg?thumb=1&w=80&h=80"
          alt
        />
        <div class="font">
          <span class="name">{{item.name}}</span>
          <span class="num">{{item.price}}元 × {{item.num}}</span>
        </div>
      </div>
    </div>
     <div class="fgx"></div>
    <div class="info">
      <div class="title"><h3>收货信息</h3></div>
      <div class="infos">
        <div>姓 名：{{orderdetail.map.name}}</div>
        <div>联系电话： {{orderdetail.map.phone}}</div>
        <div>收货地址： {{orderdetail.map.map}}</div>
        <button @click="edit">修改</button>
      </div>
    </div>
     <div class="fgx"></div>
    <div class="prices">
      <span>
        应付金额：
        <div><h3>{{price}}</h3>元</div>
      </span>
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
        <input type="text" v-model="map" ref />
        <br />
        <button @click="ok">确认</button>
        <button @click="quit">取消</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data(){ 
    return{
      name:"",
      phone:"",
      map:"",
      dialogVisible:false
    }
  },
  created(){
    console.log(this.orderdetail)
  },
  computed:{
    orderdetail(){
      
      return this.$store.state.orderdetail[this.$route.params.id]
    },
    price(){
     let price = 0
      this.$store.state.orderdetail[this.$route.params.id].goods.forEach((item)=>{
          price += (item.price*item.num)
      })
      return price
    }
  },
  methods:{
    edit(){
      this.dialogVisible = true;
      
    },
    ok(){
      let obj = {}
           obj.ordergoodsid = this.$route.params.id
           obj.map = this.map
           obj.name = this.name
           obj.phone = this.phone
            this.$store.dispatch("editOrderMapAsync", obj);
             this.dialogVisible = false;
    },
    quit(){
       this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
.prices span div,.prices span h3{
    display: inline-block;
}
.prices span h3{
    color: #ff6700;
}
.prices span{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.infos div{
    margin: 15px 0;
    color: #757575;
}
.info .title{
    font-weight: normal;
    color: #333;
}
.infos button{
    position: absolute;
    right: 0;
    top: 50px;
    border: none;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 80px;
  border:1px solid #b0b0b0;
  color: #757575;
  transition:all .5s;
  margin-right: 20px;
}
.info{
    position: relative;
    display:flex;
    flex-direction: column;
    height: 150px;
    padding: 15px;
}
.fgx{
    height: 25px;
    background-color: #f5f5f5;
}
.bottom{
    width: 1000px;
    /* height: 200px; */
    background: #fff ;
    margin: 50px 0;
}
.bottom .title,.bottom .miaoshu{
    margin: 10px 0;
    color: #ff6700;
    margin-left: 15px;
}
.bottom .good img{
    margin-left: 150px;
}
.bottom .good .font .num{
    margin-left: 50px;
}
.bottom .good .font{
    width: 100%;
}
.bottom .good .font .name{
    margin-left: 250px;
}
.bottom .good{
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 1px solid  #ff6700;
    border-bottom: 1px solid  #ff6700;
    display: flex;
    width: 100%;
    /* justify-content: center; */
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
}
.top {
    padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  width: 800px;
  height: 150px;
  background: #fff;
}
.top div {
  margin: 15px 0;
}
.top div.btn button {
  margin: 0 15px;
}
.top .btn button:first-child {
  border: none;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 80px;
  border:1px solid #b0b0b0;
  color: #757575;
  transition:all .5s;
}
.top .btn button:first-child:hover{
    background: #757575;
    color: #fff;
}
.top .btn button:last-child {
  background: #ff6700;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 80px;
}
.top div.btn {
  position: absolute;
  right: 25px;
}
.order-details {
  width: 1226px;
  margin: 0 auto;
  background: #fff;
  margin: 25px auto;
  margin-left: 25px;
}
</style>