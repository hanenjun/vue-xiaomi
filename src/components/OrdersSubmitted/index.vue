<template>
  <div class="Orders-submitted">
    <div class="box">
      <div class="i"><i class="fa fa-check" aria-hidden="true"></i></div>
      <div class="font">
        <h3>订单提交成功！去付款咯～</h3>
        <div><span>请在0小时30分</span>内完成支付, 超时后将取消订单</div>
        <div>收货信息：&nbsp;&nbsp;{{orderSubmit.name}}&nbsp;&nbsp; {{orderSubmit.phone}}&nbsp;&nbsp; {{orderSubmit.map}}</div>
      </div>
      <div class="price">
          应付总额：<span>{{price?price:0}}</span>元
      </div>
    </div>
    <div class="pay">
       <div class="font">
            <h3>选择以下支付方式付款</h3>
        <h4>支付平台</h4>
       </div>
        <ul>
            <li v-for="(item,index) in pay" :key="index" @click="active(index)" :class="{active:select==index}"><img :src="item"></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            pay:['https://s01.mifile.cn/i/banklogo/payOnline_zfb.png?ver2015','https://c1.mifile.cn/f/i/16/pay/weixinpay.png'],
                        select:0
                    }
    },
    computed:{
        price(){
            return this.$store.state.orderPrice
        },
         orderSubmit(){
      return this.$store.state.orderSubmit
    }
    },
    methods:{
        active(index){
            this.select  = index
        }
    }
};
</script>

<style scoped>
.box .font h3{
    color: #333;
    margin-bottom: 10px;
}
.box .font div span{
    color: #ff6700;
}
.box .font div{
    color:#757575;
}
.pay{
    background: #fff;
    position: relative;
    width: 100%;
    display: flex;
    margin-top: 50px;
    height: 200px;
}
.pay .font h3{
    margin: 15px 0;
}
.pay .font h4{
    margin-left: 25px;
}
.pay ul{
    top: 100px;
    display: flex;
    position: absolute;
}
.pay ul li{
    box-sizing: border-box;
    cursor: pointer;
}
.active{
    border:  1px solid #ff6700;
}
.price{
   margin-right: 50px; 
   
}
.price span{
     color: #ff6700;
}
.fa-check{
    font-size: 100px;
    font-weight: normal;
    color: green;
}
.i{
    border-radius: 50%;
    overflow:hidden;
    border: 1px solid green;
}
.Orders-submitted {
    height: 450px;
  width: 1226px;
  margin: 0 auto;
  margin-top: 20px;
}
.box .font{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 800px;
}
.box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  width: 100%;
  height: 200px;
  background: #fff;
}
</style>