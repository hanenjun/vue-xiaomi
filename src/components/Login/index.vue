<template>
  <div class="login">
    <div class="top">
      <router-link :to="{name:'home'}">
        <img
          src="https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png"
          alt
          srcset
        />
      </router-link>
    </div>
    <dir class="content">
      <div class="input">
        <input placeholder="请输入用户名" type="text" v-model="username" />
        <input placeholder="请输入密码" type="password" v-model="password" />
        <button @click="login">登入</button>
        <div>
          <span>
            <router-link :to="{name:'phonecode'}">手机短信登入</router-link>
          </span>
          <span>
            <router-link :to="{name:'register'}">立即注册</router-link>
            <span class="fgx">|</span>
            <router-link :to="{name:'password'}">忘记密码</router-link>
          </span>
        </div>
      </div>
    </dir>
     <el-dialog title="登入" :visible.sync="logins" width="30%">
      <h3>请填写用户名或密码</h3>
    </el-dialog>
  </div>
</template>
<script>
export default {
    data(){
        return{
            username:'',
            password:"",
            logins:false
        }
    },
    methods:{
        login(){
           if(this.username&&this.password){
              let obj ={
                username:this.username,
                password:this.password
            }
            this.$store.dispatch('loginAsync',obj)
           }else{
             this.logins =true
             setTimeout(()=>{ 
               this.logins  =false
             },500)
           }
            
        }
    },
    computed:{
        
    }
}
</script>

<style scoped>
.fgx {
  margin: 0 15px;
  color: #999;
}
.content .input div span {
  cursor: pointer;
}
.content .input div {
  width: 350px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.content .input div span:first-child {
  color: #ff6700;
}
.content .input div span a {
  color: #ff6700;
}
.login {
  width: 100%;
  background-color: rgb(252, 252, 252);
}
.content {
  /* padding-top: 10000px; */
  position: relative;
  width: 1226px;
  margin: 0 auto;
  height: 588px;
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-position: top center;
  background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/68e5f13a865fff66a3bdd41c472e7c19.jpg");
}
.content .input input:first-child {
  margin-top: 80px;
}
.content .input {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 450px;
  right: 0;
  height: 500px;
  top: 60px;
  background-color: #fff;
}
.content .input input {
  border: 1px solid rgb(224, 224, 224);
  padding-left: 15px;
  outline: none;
  width: 350px;
  height: 50px;
  margin: 30px;
  margin-bottom: 0;
}
.content .input button {
  cursor: pointer;
  width: 360px;
  font-size: 14px;
  height: 50px;
  margin: 40px;
  margin-bottom: 0;
  background-color: #ff6700;
  color: #fff;
  border: none;
}
.top {
  /* padding-left: 300px; */
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.top img {
  margin-left: 15px;
}
</style>