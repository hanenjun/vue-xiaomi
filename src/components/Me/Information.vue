<template>
  <div class="information">
    <div class="logo">
      <img
        src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg"
        alt
      />
    </div>
    <div class="info" v-if="!compile">
      <h3>基础资料</h3>
      <span>
        昵称：
        <span>{{user.name}}</span>
      </span>
      <span>
        性别：
        <span>{{user.sex}}</span>
      </span>
      <span>
        手机号：
        <span>{{user.phone}}</span>
      </span>
      <span>
        小米账号：
        <span>{{user.micode}}</span>
      </span>
      <div class="bj" @click="info">编辑</div>
    </div>
    <div class="infos" v-if="compile">
      <h3>基础资料</h3>
      <span class="nc">
        昵称
        <span>
          <input type="text" v-model="userobj.name" />
        </span>
      </span>
      <span class="sex">
        性别：
        <span>
          <span class="xl">
            <span @click="sex($event)" :class="{active:sexVal == 1}" data-vlaue="1">男</span>
            <span @click="sex($event)" :class="{active:sexVal == 0}" data-vlaue="0">女</span>
          </span>
        </span>
      </span>
      <span class="name">
        手机号：
        <span>
          <input type="text" v-model="userobj.phone" />
        </span>
      </span>
      <span></span>
      <div class="bj" @click="infoExut">保存退出</div>
    </div>
    <el-dialog title="个人信息" :visible.sync="dialogVisible" width="30%">
      <h3>{{title}}</h3>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "请补全信息",
      sexVal: 1,
      compile: false,
      userobj: {
        name: "",
        sex: "男",
        phone: "",
        micode: ""
      },
      dialogVisible: false
    };
  },
  methods: {
    info() {
      this.compile = true;
    },
    infoExut() {
      if (this.userobj.name) {
        if (this.userobj.sex) {
          if (this.userobj.phone) {
            this.userobj.micode = this.user.micode;
            this.edit();
            this.compile = false;
          } else {
            this.dialogVisible = true;
            setTimeout(() => {
              this.dialogVisible = false;
            }, 500);
          }
        } else {
          this.dialogVisible = true;
          setTimeout(() => {
            this.dialogVisible = false;
          }, 500);
        }
      } else {
        this.dialogVisible = true;
        setTimeout(() => {
          this.dialogVisible = false;
        }, 500);
      }
    },
    sex(val) {
      this.$nextTick(() => {
        let dom = document.querySelectorAll(".xl span");
        dom.forEach(item => {
          item.style.color = "#999";
        });
        val.target.style.color = "#ff6700";
        this.sexVal = val.target.attributes[1].nodeValue;
        this.sexVal == 1 ? (this.user.sex = "男") : (this.user.sex = "女");
      });
    },
    edit() {
      this.$store.dispatch("edituserAsync", this.userobj);
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>
<style scoped>
.information .infos span span span.active {
  color: #ff6700;
}
.bj {
  cursor: pointer;
  position: absolute;
  width: 80px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  /* background-color: red; */
  color: #4a90e3;
  top: 15px;
  right: 50px;
}

.information {
  position: relative;
  width: 978px;
  background-color: #fff;
  margin: 15px;
  margin: 0 15px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.information .infos h3 {
  font-size: 16px;
  color: #333;
}
.information .infos span {
  width: 400px;
  color: #333;
}
.information .infos span.name {
  margin-left: 28px;
}
.information .infos span span span {
  display: inline-block;
  width: 50px;
  cursor: pointer;
}
.information .infos span .xl {
  width: 100px;
  text-align: center;
}
.information .infos span.nc {
  margin-left: 55px;
}
.information .infos span.sex {
  margin-left: 58px;
}
.information .infos span input {
  width: 200px;
  height: 30px;
  outline: none;
  padding-left: 15px;
  border: 1px solid #e0e0e0;
}
.information .infos span span {
  color: #999;
}
.information .infos {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.information {
  position: relative;
  width: 978px;
  background-color: #fff;
  margin: 15px;
  margin: 0 15px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.information .info h3 {
  font-size: 16px;
  color: #333;
}
.information .info span {
  color: #333;
}
.information .info span span {
  color: #999;
}
.information .info {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.information .logo img {
  border-radius: 50%;
}
.information .logo,
.information .logo img {
  width: 160px;
  height: 160px;
}
.information .logo {
  display: flex;
  height: 200px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>