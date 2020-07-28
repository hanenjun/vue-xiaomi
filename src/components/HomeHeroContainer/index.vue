<template>
  <div class="home-hero-container container">
    <div class="container" @mouseleave="selectStyle('hidden')">
      <div class="swiper-wrapper">
        <swiper></swiper>
        <div class="site-category">
          <ul>
            <li
              v-for="(item,index) in categoryList"
              :key="index"
              @mouseenter="selectStyle(item.category)"
            >
              {{item.title}}
              <span>
                <i class="fa fa-chevron-right"></i>
              </span>
            </li>
          </ul>
        </div>
        <div class="children" v-show="children">
          <ul>
            <li
              v-show="item.category == categoryId"
              v-for="(item,index) in showChildren"
              :key="index"
            >
              <router-link :to="{name:'details',params:{id:1}}">
                <div>
                  <img :src="item.img_url" />
                  <span>{{item.title}}</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../swiper/index";
export default {
  data() {
    return {
      categoryList: [
        { category: 1, id: 1, title: "电话卡 手机" },
        { category: 2, id: 2, title: "电视 盒子" },
        { category: 3, id: 3, title: "笔记本 显示器 平板" },
        { category: 4, id: 4, title: "家电 插线板" },
        { category: 5, id: 5, title: "出行 穿戴" },
        { category: 6, id: 6, title: "智能 路由器" },
        { category: 7, id: 7, title: "电源 配件" },
        { category: 8, id: 8, title: "健康 儿童" },
        { category: 9, id: 9, title: "耳机 音响" },
        { category: 10, id: 10, title: "生活 箱包" }
      ],
      showChildren: [
        {
          category: 1,
          id: 0,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/afa28e7477639537f556eb46e3ca5f43.jpeg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "Redmin 10x 4G"
        },
        {
          category: 1,
          id: 1,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "腾讯黑纱游戏手机"
        },
        {
          category: 1,
          id: 2,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47057d897ee2c05c9215e059e1308dc6.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "Redmi 8"
        },
        {
          category: 1,
          id: 3,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b0d7d2c85734b80a1b8d1a4100c9c1f.png?thumb=1&w=40&h=40",
          title: "小米cc9e"
        },
        {
          category: 1,
          id: 4,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d12361002299529816e7e0a6b74e0a25.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "Readmin 10x 5G"
        },
        {
          category: 7,
          id: 5,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8c55361386a46857f962e5142baeefcf.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "移动电源"
        },
        {
          category: 7,
          id: 6,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=40&h=40",
          title: "数据线"
        },
        {
          category: 2,
          id: 7,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9c3ead590f49767a4f562b7285215f5e.jpg?thumb=1&w=40&h=40",
          title: "黑沙配件"
        },
        {
          category: 7,
          id: 8,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/131e5d409e62eedb94577cae11c530f1.jpg?thumb=1&w=40&h=40",
          title: "平板电脑"
        },
        {
          category: 7,
          id: 9,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/45dd7a2c4fc3d17d5d261ed3eed7cd15.jpg?thumb=1&w=40&h=40",
          title: "数据线"
        },
        {
          category: 7,
          id: 10,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5c6e60e48edf17219724faad95963b93.jpg?thumb=1&w=40&h=40",
          title: "手机壳"
        },
        {
          category: 7,
          id: 11,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2725e04c955dc060ac142fabbf809c1e.jpg?thumb=1&w=40&h=40",
          title: "自拍杆"
        },
        {
          category: 5,
          id: 12,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/397d8119508e8e3c895fc30ece88e799.jpg?thumb=1&w=40&h=40",
          title: "车充"
        },
        {
          category: 5,
          id: 13,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/27074367aa02371a3c3c417c41195346.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "无线充电器"
        },
        {
          category: 7,
          id: 14,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/10ec831749f1c657fc0a494feab15ed4.jpg?thumb=1&w=40&h=40",
          title: "电池"
        },
        {
          category: 7,
          id: 15,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9e248c899fd895c9267f494ea1aaebf.jpg?thumb=1&w=40&h=40",
          title: "手机贴膜"
        },
        {
          category: 1,
          id: 16,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米10"
        },
        {
          category: 1,
          id: 17,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/20e23b306f50384ab85b6658f5c963ff.jpg?thumb=1&w=40&h=40",
          title: "小米cc9美图定制版"
        },
        {
          category: 1,
          id: 18,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米10 青春版"
        },
        {
          category: 5,
          id: 19,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b398bad185dddb5397f2c0d9a3f6271.jpg?thumb=1&w=40&h=40",
          title: "充气宝"
        },
        {
          category: 5,
          id: 20,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/50180b158690a40f9cbc684c7646d297.jpg?thumb=1&w=40&h=40",
          title: "平衡车"
        },
        {
          category: 5,
          id: 21,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4dd7eeff34b478acd2cf3eec99b78c96.png?thumb=1&w=40&h=40",
          title: "手环"
        },
        {
          category: 5,
          id: 22,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cc76c2ce836255c1b2e3e1cf477cfef.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米手表"
        },
        {
          category: 5,
          id: 23,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6d92b9db10f261f56b2f2dfb93ca132e.jpg?thumb=1&w=40&h=40",
          title: "平衡轮"
        },
        {
          category: 5,
          id: 24,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/749c779fd3789ba94033da8aaa547dcd.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "自行车"
        },
        {
          category: 5,
          id: 25,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/4e9da27ebbeeb38078910c97173c4671.jpg?thumb=1&w=40&h=40",
          title: "滑板车"
        },
        {
          category: 5,
          id: 26,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fece041c17bdebaab5f3a9313c7c0f8c.jpg?thumb=1&w=40&h=40",
          title: "VR"
        },
        {
          category: 5,
          id: 27,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2748064a9ac9969e53851479d55f1a9.jpg?thumb=1&w=40&h=40",
          title: "智能记录仪"
        },
        {
          category: 5,
          id: 28,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/efd04d4a90822e7e2f04a365083f2607.jpg?thumb=1&w=40&h=40",
          title: "无线车充"
        },
        {
          category: 5,
          id: 29,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/971c8c01a246c7ac69a4c9be9e77e832.jpg?thumb=1&w=40&h=40",
          title: "智能后视镜"
        },
        {
          category: 5,
          id: 30,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f941386e72f745b02e8921b6c8055cd6.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "石英表"
        },
        {
          category: 2,
          id: 31,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7bef124bc015669bdacf76d5d4b02a7e.png?thumb=1&w=40&h=40",
          title: "小米电视5 55寸"
        },
        {
          category: 2,
          id: 32,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a3aff2c5e8207dafd8fc3bfad5a2e21.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米电视 4x"
        },
        {
          category: 2,
          id: 33,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d8264eb9b900ead63eea69f6fc1e413a.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米电视 pro"
        },
        {
          category: 2,
          id: 34,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23316088a9182a08c624958319924d8d.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米电视75寸"
        },
        {
          category: 3,
          id: 35,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米笔记本"
        },
        {
          category: 3,
          id: 36,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f45cdc4f94f1f1651095dedb154c2e4.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米笔记本pro"
        },
        {
          category: 3,
          id: 37,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a66c24ee8ae2efea3ae92ec455a27352.jpg?thumb=1&w=40&h=40",
          title: "小米游戏本"
        },
        {
          category: 8,
          id: 38,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e997ed31cd5199ec0a24eeb48a37b1e7.jpg?thumb=1&w=40&h=40",
          title: "空气净化器"
        },
        {
          category: 4,
          id: 39,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/18723c3561252ce76c9a1b1eebc4c01c.png?thumb=1&w=40&h=40",
          title: "滚筒洗衣机"
        },
        {
          category: 4,
          id: 40,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/12f4b26ced3716d07bfcc6beba751188.jpg?thumb=1&w=40&h=40",
          title: "净水器"
        },
        {
          category: 4,
          id: 41,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/603beb09930e32addd1b362bf43c7ac2.jpg?thumb=1&w=40&h=40",
          title: "扫地机器人"
        },
        {
          category: 4,
          id: 42,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f7f39b7ac49227fc59c3f2b2105d25d6.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "电烤箱"
        },
        {
          category: 6,
          id: 43,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4670a965ac5f0dd32689e06c27cea78f.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小米路由器"
        },
        {
          category: 6,
          id: 44,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/14107363b5dc77b18e9983bda999931d.jpg?thumb=1&w=40&h=40",
          title: "智能家庭"
        },
        {
          category: 8,
          id: 45,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/da43c3dd6b171ee267f1fd1ec01b9208.jpg?thumb=1&w=40&h=40",
          title: "洗手机"
        },
        {
          category: 8,
          id: 46,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/60d7bdf307ceaba08b3275246ad3ab53.jpg?thumb=1&w=40&h=40",
          title: "剃须刀"
        },
        {
          category: 8,
          id: 47,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/15447769c461fdc71e84a7badb83f09b.jpg?thumb=1&w=40&h=40",
          title: "牙刷"
        },
        {
          category: 8,
          id: 48,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bba7ce79f4d61939c69b7a26bf507bae.jpg?thumb=1&w=40&h=40",
          title: "吹风机"
        },
        {
          category: 8,
          id: 49,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/459afd0eb2a3bc6313e7ac62bd3a52df.png?thumb=1&w=40&h=40",
          title: "体重秤"
        },
        {
          category: 9,
          id: 50,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/374ce749560e0e74a792b6222048a472.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小爱音响"
        },
        {
          category: 9,
          id: 51,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/360215a1e32317abb912d48c3e80dd20.png?thumb=1&w=40&h=40&f=webp&q=90",
          title: "音响pro"
        },
        {
          category: 10,
          id: 52,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9f26030d7d914b86daca51233a3ac5f9.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "小背包"
        },
        {
          category: 10,
          id: 53,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f628feba0f2f8253f9cc41f9984194a7.jpg?thumb=1&w=40&h=40",
          title: "双肩包"
        },
        {
          category: 10,
          id: 54,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e899d08e36c306570d4fe3c75df90a42.jpg?thumb=1&w=40&h=40",
          title: "运动鞋"
        },
        {
          category: 10,
          id: 55,
          img_url:
            "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c5138635ef1396e35856ec942e3b6c0.jpg?thumb=1&w=40&h=40&f=webp&q=90",
          title: "旅行箱"
        },
        {
          category: 10,
          id: 56,
          img_url:
            "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/395ffd04841f70b8bdf67339ba1dfc98.jpg?thumb=1&w=40&h=40",
          title: "伞"
        }
      ],
      children: false,
      categoryId: ""
    };
  },
  components: {
    swiper
  },
  methods: {
    selectStyle(id) {
      if (id == "hidden") {
        this.children = false;
        return;
      }
      this.children = true;
      this.categoryId = id;
    }
  }
};
</script>

<style scoped>
.home-hero-container {
  margin: 0 auto;
  width: 1226px;
  height: 420px;
}
.swiper-wrapper {
  width: 1226px;
  height: 440px;
  display: flex;
  flex-direction: row;
}
.site-category {
  font-size: 14px;
  width: 234px;
  height: 440px;
  z-index: 999;
  background-color: rgba(41, 38, 38, 0.6);
}
.container {
  display: flex;
  flex-direction: row;
}
.site-category ul {
  width: 234px;
  height: 420px;
  margin: 10px 0;
}
.site-category ul li {
  color: #fff;
  width: 204px;
  height: 42px;
  padding-left: 30px;
  line-height: 42px;
  text-align: right;
}
.site-category ul li {
  cursor: pointer;
  /* display: inline-block; */
  line-height: 42px;
  width: 204px;
  height: 42px;
  text-align: left;
  position: relative;
}
.site-category ul li:hover {
  background-color: #ff6700;
}
.site-category ul li .fa-chevron-right {
  font-weight: normal;
  font-size: 12px;
  margin-right: 15px;
  text-align: right;
  position: absolute;
  top: 16px;
  right: 0;
}

.children,
.children ul {
  overflow: hidden;
  /* display: none; */
  width: 992px;
  height: 440px;
  background-color: #fff;
  z-index: 99;
}
.children ul {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.children ul li {
  cursor: pointer;

  width: 265px;
  height: 70px;
  display: flex;
  margin-left: 50px;
  line-height: 76px;
  justify-content: flex-start;
  align-items: center;
}
.children ul li div {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.children ul li img {
  height: 40px;
  width: 40px;
}
.children ul li span {
  margin-left: 20px;
}
</style>