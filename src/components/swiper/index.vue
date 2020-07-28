<template>
  <div>
    <div class="login_img">
      <span @click="jian">
        <i class="fa fa-chevron-left"></i>
      </span>
      <transition-group tag="ul" name="img">
        <li class="imgs" v-for="(image,index) in imgs" :key="index" v-show="index===mark">
          <router-link :to="{name:'details',params:{id:1}}">
             <div class="divImg" :style="{backgroundImage: 'url('+image+')'}"></div>
          </router-link>
         
        </li>
      </transition-group>
      <span @click="jia">
        <i class="fa fa-chevron-right"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mark: 0,
      imgs: [
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e343492a08e8d072ba9f645522da7dc.jpg?w=2452&h=920",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b60e10dd517a4cf61b7346dbb18c4f38.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/20084678758554b8a00d6150f6135389.jpg?thumb=1&w=1226&h=460&f=webp&q=90",
        "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d0ebdee49c614a0ec438933982059053.jpg?thumb=1&w=1226&h=460&f=webp&q=90"
      ],
      time: ""
    };
  },
  methods: {
    autoPlay() {
      this.time = setInterval(() => {
        if (this.mark < this.imgs.length - 1) {
          this.mark++;
        } else {
          this.mark = 0;
        }
      }, 5000);
    },
    jia() {
      clearInterval(this.time);
      if (this.mark < this.imgs.length - 1) {
        this.mark++;
      } else {
        this.mark = 0;
      }
      let pay = () => {
        this.time = setInterval(() => {
          if (this.mark < this.imgs.length - 1) {
            this.mark++;
          } else {
            this.mark = 0;
          }
        }, 5000);
      };
      setTimeout(() => {
        pay();
      }, 10);
    },
    jian() {
      clearInterval(this.time);
      if (this.mark > 0) {
        this.mark--;
      } else {
        this.mark = this.imgs.length - 1;
      }
      let pay = () => {
        this.time = setInterval(() => {
          if (this.mark < this.imgs.length - 1) {
            this.mark++;
          } else {
            this.mark = 0;
          }
        }, 5000);
      };
      setTimeout(() => {
        pay();
      }, 10);
    }
  },
  created() {
    this.autoPlay();
  },
  watch: {}
};
</script>
<style scoped>
.login_img {
  position: relative;
}
.login_img ul li {
  position: absolute;
}
.login_img span {
  z-index: 88;
  width: 41px;
  height: 69px;
  border-radius: 5px;
  text-align: center;
  line-height: 69px;
  color: #fff;
  top: 190px;
}
.login_img span:hover {
  background-color: #333;
  text-align: center;
}
.login_img span:first-child {
  position: absolute;
  left: 238px;
}
.login_img span:last-child {
  line-height: 69px;

  position: absolute;
  left: 1180px;
}
.login_img .divImg {
  background-position: 0px;
  background-size: cover;
  background-repeat: no-repeat;
  width: 1226px;
  height: 440px;
}
.img-enter-active,
.img-leave-active {
  transition: all 2s;
}
.img-enter,
.img-leave-to {
  opacity: 0;
}
.img-enter-to,
.img-leave {
  opacity: 1;
}
.imgs {
  cursor: pointer;
}
</style>