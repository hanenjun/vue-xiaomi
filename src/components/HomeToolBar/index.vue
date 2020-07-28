<template>
  <div class="home-tool-bar">
    <ul>
      <li
        @click="goto(index)"
        @mouseenter="enter(index)"
        @mouseleave="out(index)"
        v-for="(item,index) in list"
        :key="index"
      >
        <img :src="item.img_url" alt srcset />
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img_url:
            "https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png",
          text: "个人中心",
          link: { name: "init" }
        },
        {
          img_url:
            "https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png",
          text: "购物车",
          link: { name: "cart" }
        },
        {
          img_url: "//i1.mifile.cn/f/i/2018/home/totop.png",
          text: "返回顶部"
        }
      ]
    };
  },
  methods: {
    enter(index) {
      if (index == 0) {
        this.list[index].img_url =
          "https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png";
      } else if (index == 1) {
        this.list[index].img_url =
          "https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png";
      } else {
        this.list[index].img_url =
          "//i1.mifile.cn/f/i/2018/home/totop_hover.png";
      }
    },
    out(index) {
      if (index == 0) {
        this.list[index].img_url =
          "https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png";
      } else if (index == 1) {
        this.list[index].img_url =
          "https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png";
      } else {
        this.list[index].img_url = "//i1.mifile.cn/f/i/2018/home/totop.png";
      }
    },
    goto(index) {
      if (index != 2) {
        if (this.$store.state.user.userid) {
          this.$router.push({
            name: this.list[index].link.name,
            params: {
              id: this.$store.state.user.userid
            }
          });
        } else {
          this.$router.push({
            name: "login"
          });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>

<style scoped>
.home-tool-bar {
  position: fixed;
  right: 25px;
  top: 200px;
  background-color: #fff;
  color: #333;
  width: 85px;
  height: 280px;
}
.home-tool-bar ul {
  display: flex;
  flex-direction: column;
  width: 85px;
  height: 280px;
}
.home-tool-bar ul li:hover span {
  color: #ff6700;
}
.home-tool-bar ul li {
  cursor: pointer;
  border: 1px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 92px;
}
.home-tool-bar ul li span {
  font-size: 14px;
  color: #333;
}

.home-tool-bar ul li img {
  margin-bottom: 8px;
  width: 30px;
  height: 30px;
}
</style>