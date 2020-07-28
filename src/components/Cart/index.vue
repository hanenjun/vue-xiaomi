<template>
  <div class="cart">
    <div class="header">
      <div class="nb">
        <div class="header-logo">
          <ul>
            <li>
              <a class="logo"></a>
            </li>
            <li>
              <a class="logo-mi"></a>
            </li>
          </ul>
        </div>
        <h1>我的购物车</h1>
      </div>
    </div>
    <div class="content">
      <div class="carts" ref="carts">
        <div class="top">
          <input type="checkbox" :checked='checkAll' class="checkbox" @click="checkAllAsync"/>
          <span class="qx" >全选</span>
          <span class="name">商品名称</span>
          <span class="price">单价</span>
          <span class="num">数量</span>
          <span class="xj">小计</span>
          <span class="gb">操作</span>
        </div>

        <div class="goods" ref="goods">
        <div v-if="goodsList==0" class="mark"><router-link :to="{name:'home'}">还没有商品快去添加吧</router-link></div>

          <div  class="good" v-for="(item,index) in goodsList" :key="index">
            <input type="checkbox" class="checkbox" :checked="item.select" @click="toggleSelect(index)" />
            <img
              src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1557977821.03156568.jpg?thumb=1&w=80&h=80"
              alt
            />
            <span class="name">{{item.title}}&nbsp;&nbsp;{{item.banben}}&nbsp;&nbsp;{{item.color}}</span>
            <span class="price">{{item.price}}元</span>
            <span class="num">
              <button @click="minus(index)">-</button>
              &nbsp;{{item.num}}&nbsp;
              <button @click="add(index)">+</button>
            </span>
            <span class="jiage">{{subtotal(item.price,item.num)}}元</span>
            <span class="gb">
              <i @click="remove(index)" class="fa fa-close"></i>
            </span>
          </div>
        </div>
        <div class="bottom">
          <span class="go">继续购物</span>|
          <span class="num">
            共
            <span>{{count}}</span>件商品，已选择
            <span>{{select}}</span>件
          </span>
          <span class="jg">
            合计
            <h2>{{totalPrice}}</h2>元
          </span>
          <button class="goto" @click="goto">去结算</button>
        </div>
      </div>
    </div>
      <el-dialog title="购物车" :visible.sync="dialogVisible" width="30%">
      <h3>{{title}}</h3>
    </el-dialog>
    <el-dialog title="购物车" :visible.sync="notgoods" width="30%">
      <h3>请选择商品或去添加商品</h3>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:'删除成功',
      dialogVisible:false,
      notgoods:false
    };
  },
  mounted() {
    let clicks = document.querySelectorAll(".header-logo ul li");
    clicks.forEach(item => {
      item.addEventListener("click", () => {
        this.$router.push({ name: "home" });
      });
    });
    this.SelectAsync()
    this.totalPriceAsync()
  },
  created() {
    this.$nextTick(() => {
      let goods = this.$refs.goods.children.length;
      let length = 80 + 80 + 100 * goods + "px";
      this.$refs.carts.style.height = length;
      this.goodLength = this.goodList.length
    
    });
     this.$store.dispatch("createdCheckAllAsync")
     let one = this.$store.state.one
     if(!this.cart.length-1<0&&one){
       this.checkAllAsync()
        this.$store.dispatch('oneAsync')
     }
  },
  methods: {
    goto(){
    if(this.count>0&&this.select>0){
      this.$router.push({name:'affirm',params:{id:1}})
    }else{
      this.notgoods = true
       setTimeout(()=>{
         this.notgoods = false
       },500)
    }
    },
    checkAllAsync(){
       this.$store.dispatch("checkAllAsync");
        this.totalPriceAsync()
    },
    subtotal: (price, num) => {
      return price * num;
    },
    add(index) {
      this.$store.dispatch("addGoodNumAsync", index);
       this.totalPriceAsync()
    },
     minus(index) {
      this.$store.dispatch("minusGoodNumAsync", index);
       this.totalPriceAsync()
    },
    remove(index){
      this.$store.dispatch("removeGoodAsync", index);
       this.totalPriceAsync()
       this.dialogVisible = true
       setTimeout(()=>{
         this.dialogVisible = false
       },500)
    },
    toggleSelect(index){
      this.$store.dispatch("toggleSelectAsync", index);
       this.totalPriceAsync()
    },
    SelectAsync(){
        this.$store.dispatch("SelectAsync");
         this.totalPriceAsync()
    },
    totalPriceAsync(){ 
       this.$store.dispatch("totalPriceAsync");
    },

     },
  computed: {
    goodsList() {
      function deepClone(target) {
        // 定义一个变量
        let result;
        // 如果当前需要深拷贝的是一个对象的话
        if (typeof target === "object") {
          // 如果是一个数组的话
          if (Array.isArray(target)) {
            result = []; // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
              // 递归克隆数组中的每一项
              result.push(deepClone(target[i]));
            }
            // 判断如果当前的值是null的话；直接赋值为null
          } else if (target === null) {
            result = null;
            // 判断如果当前的值是一个RegExp对象的话，直接赋值
          } else if (target.constructor === RegExp) {
            result = target;
          } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {};
            for (let i in target) {
              result[i] = deepClone(target[i]);
            }
          }
          // 如果不是对象的话，就是基本数据类型，那么直接赋值
        } else {
          result = target;
        }
        // 返回最终结果
        return result;
      } 
       let  goodList = deepClone(this.$store.state.cart);
      return goodList
    },
    count(){
      return this.$store.state.count
    },
    select(){
      return this.$store.state.Select
    },
    totalPrice(){
      return  this.$store.state.totalPrice
    },
    checkAll(){
      return  this.$store.state.checkAll
    },
    cart(){
      return  this.$store.state.cart
    }
  }
};
</script>

<style scoped>
.mark{
  width: 1226px;
  margin: 0 auto;
  text-align: center;
  height: 300px;
}
.mark a{
  color: #f25807 !important;

}
.carts .good {
  display: flex;
  flex-direction: row;
}
.carts .goods .qx {
  margin-left: 50px;
}
.carts .goods img {
  width: 80px;
  margin-left: 50px;
  margin-top: 10px;
  height: 80px;
}
.carts .goods {
  min-height: 300px;
  line-height: 80px;
  position: relative;
}
.carts .goods .checkbox {
  top: 27px;
  /* position: absolute; */
  /* margin-top: 30px; */
  margin-top: 30px;
  width: 25px;
  height: 25px;
}
.carts .goods .name {
  width: 300px;
  margin-left: 30px;
}

.carts .goods .price {
  width: 100px;
  margin-left: 60px;
}

.carts .goods .num {
  width: 100px;
  margin-left: 115px;
}
.carts .goods .num button {
  cursor: pointer;
  outline: none;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  width: 20px;
  height: 30px;
}
.carts .goods .num button:hover {
  background-color: rgb(224, 224, 224);
}
.carts .goods .jiage {
  width: 100px;
  margin-left: 100px;
}

.carts .goods .gb {
  cursor: pointer;
  width: 100px;
  margin-left: 50px;
}

.carts .bottom {
  color: #757575;
}
.carts .bottom .go {
  line-height: 80px;
  margin: 0 15px;
}

.carts .bottom .num {
  line-height: 80px;
  margin: 0 15px;
}

.carts .bottom .num span {
  color: #ff6700;
}

.carts .bottom .jg {
  line-height: 80px;
  margin-left: 600px;
}
.carts .bottom .jg h2 {
  color: #ff6700;
  display: inline-block;
}

.carts .bottom .goto {
  cursor: pointer;
  outline: none;
  width: 100px;
  height: 50px;
  margin-left: 50px;
  background: #f25807;
  border: none;
  color: #fff;
  font-size: 18px;
}

.carts .top .qx {
  margin-left: 50px;
}
.carts .top {
  line-height: 80px;
  position: relative;
}
.carts .top .checkbox {
  top: 27px;
  position: absolute;
  /* margin-top: 30px; */
  width: 25px;
  height: 25px;
}
.carts .top .name {
  width: 100px;
  margin-left: 150px;
}

.carts .top .price {
  width: 100px;
  margin-left: 250px;
}

.carts .top .num {
  width: 100px;
  margin-left: 200px;
}

.carts .top .xj {
  width: 100px;
  margin-left: 150px;
}

.carts .top .gb {
  width: 100px;
  margin-left: 100px;
}

.carts .goods {
  margin: 10px;
  position: absolute;
  top: 80px;
}
.carts .top {
  margin: 10px;

  border-bottom: 2px solid #f5f5f5;
  position: absolute;
  top: 0;
  width: 1226px;
  height: 80px;
  /* background-color: red; */
}
.carts .bottom {
  margin: 10px;
  border-top: 2px solid #f5f5f5;
  position: absolute;
  bottom: 0;
  width: 1226px;
  height: 80px;
}
.content {
  width: 1226px;
  margin: 0 auto;
}
.cart {
  /* position: relative; */
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 50px;
}
.carts {
  position: relative;
  width: 1226px;
  margin: 0 auto;
  background: #fff;
  margin-top: 100px;
  /* height: 1000px; */
  /* height: auto; */
  display: flex;
  flex-direction: column;
}
.header {
  height: 100px;
  width: 100%;
  background-color: #fff;
}
.header .nb {
  padding-top: 18px;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 1226px;
  height: 100px;
  margin: 0 auto;
}
.header div h1 {
  margin-left: 50px;
  display: inline-block;
  font-weight: normal;
}

.header-logo {
  /* position: absolute; */
  top: 15px;
  left: 100px;
  width: 55px;
  height: 55px;
  background-color: #ff6700;
}
.header-logo ul {
  list-style: none;
  display: flex;
}
.header-logo ul li {
  cursor: pointer;
}
.header-logo .logo {
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-image: url(../../assets/logo.png);
}
.header-logo ul {
  width: 55px;
  /* overflow: hidden; */
  height: 55px;
  position: absolute;
  left: -55px;
  transition: all 0.3s;
}
.header-logo .logo-mi {
  width: 55px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-image: url(../../assets/mi-logo.png);
}
.header-logo:hover ul {
  left: 0px;
}
</style>