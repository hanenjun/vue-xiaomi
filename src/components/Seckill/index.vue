<template>
  <div class="seckill">
    <div class="header">
      <ul>
        <div
          v-for="(item,index) in goodsList"
          :key="index"
          :class="{active:active==index}"
          @click="selected(index)"
        >
          <li v-if="item.start_time < new Date()">
            <span>
              抢购中
            </span>
          </li>
          <li v-else>即将开始</li>
        </div>
      </ul>
    </div>
    <div class="body">
      <ul>
        <div v-for="(item,index) in goodsList[active].list" :key="index">
          <li>
            <img
              :src="item.img"
              alt
            />
            <div class="font">
              <h3>{{item.goods_name}}</h3>
              <span>{{item.seckill_price}}元</span>
              <div v-if="item.start_time < new Date()">抢购</div>
              <div v-else>已结束</div>
            </div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    filters:{
        date(val){
           return moment(val).format('LT');
        }
    },
   computed:{
       
   },
  data() {
    return {
      goodsList: [
        {
          list: [
            {
              seckill_type: "seckill",
              goods_id: "2192100013",
              goods_name: "小米中性笔 10支装 白色",
              seckill_price: "19.90",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c70d927ca6b19473bf0b5b74d68da7e2.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2194100029",
              goods_name: "MIJOY 抽纸青春版 24包/箱 ",
              seckill_price: "27.90",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191100003",
              goods_name: "小米路由器4A千兆版",
              goods_price: "169",
              seckill_price: "129.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c97afe622ee275fe873abd9f80a31e6d.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "1201700047",
              goods_name: "小米柔风空调（大1匹/变频/超一级能效）",
              goods_price: "2499",
              seckill_price: "2199.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fe49b8c3b1fd6bd9c8f30debdde2473.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2201700023",
              goods_name:
                "RedmiBook 13 锐龙版 R5 8G 512G SATA  SSD 集显 月光银",
              goods_price: "3799",
              seckill_price: "3499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c2c69389bb90b389173903cdec03ac6.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2194200002",
              goods_name: "小米曲面显示器 34英寸 黑",
              goods_price: "2499",
              seckill_price: "1999.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca1ed68dbde04379bc2c119063700e47.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191600013",
              goods_name: "米家走步机 银灰色",
              goods_price: "1799",
              seckill_price: "1599.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c0eb6f7f125583576f3a7dd7b1c236.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2202000016",
              goods_name: " 14 Ⅱ R5 8G 512G 银色",
              goods_price: "3799",
              seckill_price: "3499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc3e8e32df89b8adb57f9efe1d29dead.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193200006",
              goods_name: "米家扫拖机器人 黑色",
              goods_price: "1999",
              seckill_price: "1499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ad0f47f7ba0c9a553c4c6344ad2960.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193000001",
              goods_name: "最生活毛巾·Air（10条装） 白色+素蓝",
              goods_price: "169",
              seckill_price: "99.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc4f6467dfe754f6ddacb3f605d8948.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2200100007",
              goods_name: "小米米家智能门锁 标准碳素黑",
              goods_price: "1299",
              seckill_price: "1099.00",
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9914e01e49c18e56c8017408656a729.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2194100015",
              goods_name: "米家风冷三门冰箱 210L 银色",
              goods_price: "1699",
              seckill_price: "1499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e9c6d905b6fc0374c48874a927490b5.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2202000019",
              goods_name: "RedmiBook 16 R5 8G 512G 灰色 灰色",
              goods_price: "3799",
              seckill_price: "3599.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6089eff4ea9ef116073eced92480037.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2201700037",
              goods_name: "米家驱蚊器 智能版（3个装） 白色",
              goods_price: "149",
              seckill_price: "129.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/618fc1053237bc0e00e92bc67fbd4f06.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191100024",
              goods_name: "Redmi全自动波轮洗衣机 1A 8kg 白色",
              goods_price: "899",
              seckill_price: "749.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b01db5c3e117dec81e3dacc3b2f8cf9a.jpg"
            }
          ],
          cdm: "0.0.0.0",
          banner_config: null,
          time_id: 1591149600,
          start_time: 1591149600,
          end_time: 1591162920,
          list_count: 15
        },
        {
          list: [
            {
              seckill_type: "seckill",
              goods_id: "2194100029",
              goods_name: "MIJOY 抽纸青春版 24包/箱 ",
              goods_price: "32.9",
              seckill_price: "27.90",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193700011",
              goods_name: "米家金属签字笔 金色",
              goods_price: "24.9",
              seckill_price: "19.90",
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d97bdddc2763a1a4624a7ca0305e962d.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191100003",
              goods_name: "小米路由器4A千兆版",
              goods_price: "169",
              seckill_price: "129.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c97afe622ee275fe873abd9f80a31e6d.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "1201700047",
              goods_name: "小米柔风空调（大1匹/变频/超一级能效）",
              goods_price: "2499",
              seckill_price: "2199.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fe49b8c3b1fd6bd9c8f30debdde2473.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2194200002",
              goods_name: "小米曲面显示器 34英寸 黑",
              goods_price: "2499",
              seckill_price: "1999.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca1ed68dbde04379bc2c119063700e47.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2200900048",
              goods_name: "小卫质品祛味喷雾 白色",
              goods_price: "24.9",
              seckill_price: "16.90",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb4d85324e09248d7443935c6cb9911c.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2170600006",
              goods_name: "小米米家电动滑板车 白色",
              goods_price: "1999",
              seckill_price: "1799.00",
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/26569c7e152d8977492ecd94a5d63925.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2201700023",
              goods_name:
                "RedmiBook 13 锐龙版 R5 8G 512G SATA  SSD 集显 月光银",
              goods_price: "3799",
              seckill_price: "3499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2c2c69389bb90b389173903cdec03ac6.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191600013",
              goods_name: "米家走步机 银灰色",
              goods_price: "1799",
              seckill_price: "1599.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/94c0eb6f7f125583576f3a7dd7b1c236.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2202000016",
              goods_name: " 14 Ⅱ R5 8G 512G 银色",
              goods_price: "3799",
              seckill_price: "3499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bc3e8e32df89b8adb57f9efe1d29dead.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193200006",
              goods_name: "米家扫拖机器人 黑色",
              goods_price: "1999",
              seckill_price: "1499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/81ad0f47f7ba0c9a553c4c6344ad2960.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2200100007",
              goods_name: "小米米家智能门锁 标准碳素黑",
              goods_price: "1299",
              seckill_price: "1099.00",
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e9914e01e49c18e56c8017408656a729.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2190400006",
              goods_name: "小米米家电动滑板车Pro 黑色",
              goods_price: "2799",
              seckill_price: "2699.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4f73de93cc514f963a21394109ede00e.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2194100015",
              goods_name: "米家风冷三门冰箱 210L 银色",
              goods_price: "1699",
              seckill_price: "1499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e9c6d905b6fc0374c48874a927490b5.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193000001",
              goods_name: "最生活毛巾·Air（10条装） 白色+素蓝",
              goods_price: "169",
              seckill_price: "99.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc4f6467dfe754f6ddacb3f605d8948.jpg"
            }
          ],
          cdm: "0.0.0.0",
          banner_config: null,
          time_id: 1591164000,
          start_time: 1591164000,
          end_time: 1591184520,
          list_count: 15
        },
        {
          list: [
            {
              seckill_type: "seckill",
              goods_id: "2194100029",
              goods_name: "MIJOY 抽纸青春版 24包/箱 ",
              goods_price: "32.9",
              seckill_price: "27.90",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/db0c370f85f438f4dda6cce9a770f7f2.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191100003",
              goods_name: "小米路由器4A千兆版",
              goods_price: "169",
              seckill_price: "129.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c97afe622ee275fe873abd9f80a31e6d.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "1201700047",
              goods_name: "小米柔风空调（大1匹/变频/超一级能效）"
            },
            {
              seckill_type: "seckill",
              goods_id: "2201100018",
              goods_name: "Redmi K30 Pro 变焦版 12GB+512GB 天际蓝",
              goods_price: "4499",
              seckill_price: "4099.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b140b059be135493ddfc2db872bbf32d.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2201700003",
              goods_name: "小米小白智能摄像机增强版 白",
              goods_price: "399",
              seckill_price: "349.00",
              img:
                "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/5d0f25ec3799ea934f800739e81ee789.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193400018",
              goods_name: "Redmi Note 8 Pro 6GB+64GB 贝母白",
              desc: "6400万全场景四摄",
              goods_price: "1399",
              seckill_price: "1199.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/57df3dacb9659ee76e1f03ec87d0a582.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193000001",
              goods_name: "最生活毛巾·Air（10条装） 白色+素蓝",
              desc: "给生活一条好毛巾",
              goods_price: "169",
              seckill_price: "99.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1bc4f6467dfe754f6ddacb3f605d8948.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2194100015",
              goods_name: "米家风冷三门冰箱 210L 银色",
              desc: "三门保鲜，无霜长效养鲜",
              goods_price: "1699",
              seckill_price: "1499.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9e9c6d905b6fc0374c48874a927490b5.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2201100019",
              goods_name: "Redmi K30 Pro 变焦版 12GB+512GB 星环紫",
              desc: "双模5G，骁龙865，弹出全面屏",
              goods_price: "4499",
              seckill_price: "4099.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f824c837f4c033cc56a11e56429ba301.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2195000007",
              goods_name: "Redmi K30 5G  6GB+128GB 紫玉幻境",
              desc: "双模5G，120Hz流速屏",
              goods_price: "2299",
              seckill_price: "1999.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0feb751b13514480f7550314bbf220e6.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2191100024",
              goods_name: "Redmi全自动波轮洗衣机 1A 8kg 白色",
              desc: "一键操作，父母都爱用",
              goods_price: "899",
              seckill_price: "749.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b01db5c3e117dec81e3dacc3b2f8cf9a.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2193400019",
              goods_name: "Redmi Note 8 Pro 6GB+64GB 电光灰",
              desc: "6400万全场景四摄",
              goods_price: "1399",
              seckill_price: "1199.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/47e3bbd8d0a9b6182b51f3cbe79d790c.jpg"
            },
            {
              seckill_type: "seckill",
              goods_id: "2195000008",
              goods_name: "Redmi K30 5G  6GB+128GB 时光独白",
              desc: "双模5G，120Hz流速屏",
              goods_price: "2299",
              seckill_price: "1999.00",
              img:
                "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5b9f62902781fdacb9dc258d00b16058.jpg"
            }
          ],
          cdm: "0.0.0.0",
          banner_config: null,
          time_id: 1591200000,
          start_time: 1591200000,
          end_time: 1591234920,
          list_count: 15
        }
      ],
      active: 0
    };
  },
  methods: {
    selected(index) {
      console.log(index);
      this.active = index;
    }
  }
}
</script>

<style scoped>
.seckill .body ul li img {
  height: 100%;
}
.seckill .body ul li .font span {
  display: inline-block;
  margin: 20px 0;
  margin-left: 8px;
  margin-top: 0px;
}
.seckill .body ul li .font h3 {
  color: #333;
  margin: 20px 0;
  margin-left: 8px;
  font-size: 16px;
}
.seckill .body ul li div div {
  width: 120px;
  height: 30px;
  background-color: #ff6700;
  text-align: center;
  line-height: 30px;
  margin-left: 30px;
  margin-top: 15px;
  color: #fff;
}
.seckill .body ul li .font {
  display: flex;
  /* align-items: center; */
  /* justify-content: space-around; */
  flex-direction: column;
  height: 100%;
}
.seckill .body ul {
  /* display: flex; */
  float: left;
  width: 1226px;
  height: 1015px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.seckill .body ul li {
  float: left;
margin: 0 10px;
  display: flex;
  flex-direction: row;
  width: 380px;
  height: 190px;
  background-color: #fff;
  margin-top: 15px;
  /* margin-bottom: 15px; */
}
.seckill .body {
  width: 1226px;
  height: 1015px;
  margin: 15px 0;
  margin-bottom: 50px;
  margin-left: 15px;
}
.seckill .header ul div.active {
  background-color: #f1393a;
}
.seckill .header ul li span {
  margin-left: 15px;
  font-size: 12px;
  flex-direction: column;
  height: 68px;
  justify-content: center;
  align-content: center;
  display: flex;
}
.seckill .header ul li {
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  width: 245px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.seckill .header ul {
  display: flex;
  width: 1226px;
  height: 68px;
  background-color: #414141;
}
.seckill {
  width: 1226px;
  margin: 0 auto;
}
.seckill .header {
  flex-direction: column;
  justify-content: flex-end;
  background: #f5f5f5
    url("//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cba013aa492551729f3a42e1668b9d9.jpg")
    50% 0 no-repeat;
  height: 170px;
  display: flex;
}
</style>