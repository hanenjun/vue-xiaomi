<template>
  <div class="register">
    <dir class="content">
      <div class="input">
         <img class="img" src="https://account.xiaomi.com/static/res/349d9c1/account-static/respassport/acc-2014/img/milogo.png">
        <h1>手机号登入</h1>
        <input placeholder="请输入手机号" type="text" v-model="password" />
        <div class="codes">
          <input  class="code" placeholder="请输入验证码" type="text" v-model="code" />
          <button  @click="send">发送验证码</button>
        </div>
        <button @click="goto">登入</button>
      </div>
    </dir>
     <el-dialog title="扽登入" :visible.sync="phonecode" width="30%">
      <h3>请填写正确的手机号</h3>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data(){
        return{
            password:"",
            code:'',
            phonecode:false
        }
    },
    methods:{
        send(){
            this.phone = false
        },
        goto(){
            if(!(/^1[3456789]\d{9}$/.test(this.password))){ 
        this.phonecode = true
        setTimeout(()=>{
          this.phonecode = false
        },500)
        return false; 
            }
        }
    }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;

    /* justify-content: center; */
  align-items: center;
}
.content .img{
  width: 48px;
  height: 48px;
  margin-top: 30px  0;
  display:block;
}
.content .input .codes {
  position: relative;
  width: 350px !important;
  background-color: red;
  height: 54px !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-around !important;
}
.content .input .codes .code {
  width: 200px !important;
  height: 53px !important;
  position: absolute;
  top: -80px;
  left: -30px;
  /* padding-left: 15px; */
}
.content .input .codes button {
  width: 133px;
  top: -40px;
  height: 53px;
  position: absolute;
  right: -40px;
}
.content .input h1 {
  font-size: 30px;
  font-weight: normal;
}
.register {
  height: 100%;
  width: 100%;
  background-color: #f9f9f9;
}
body {
  background-color: #f9f9f9;
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

.content {
  position: relative;
  width: 1226px;
  margin: 0 auto;
  height: 588px;
  /* background-color: #f5f5f5; */
}
.content .input input:first-child {
  margin-top: 80px;
}
.content .input {
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 750px;
  right: 50%;
  transform: translate(50%, -50%);
  height: 500px;
  top: 50%;
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
.content .input button:hover {
  background-color: rgb(255, 147, 106);
}
.content .input button {
  outline: none;
  width: 350px;
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
</style>