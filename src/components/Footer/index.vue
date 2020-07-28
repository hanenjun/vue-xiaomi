<template>
  <div class="footer">
    <div class="top">
      <ul>
        <li>
          <span class="iconfont">&#xe7f2; &nbsp;预约维修服务</span>
        </li>
        <span class="sh">|</span>
        <li>
          <span class="iconfont">&#xe697; &nbsp;满99元包邮</span>
        </li>
        <span class="sh">|</span>
        <li>
          <span class="iconfont">&#xe691; &nbsp;7天无理由退货</span>
        </li>
        <span class="sh">|</span>
        <li>
          <span class="iconfont">&#xe607; &nbsp;15天免费换货</span>
        </li>
        <span class="sh">|</span>
        <li>
          <span class="iconfont">&#xe511; &nbsp;520家售后网点</span>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul class="oneul">
        <li class="oneli" v-for="(item,index) in footerList " :key="index">
            {{index}}
          <ul class="twoul">
            <li class="twoli" v-for="(item,index) in item" :key="index">{{item}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mibottom">
      © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号
（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告
增值电信业务许可证 网络食品经营备案（京）【2018】WLSPJYBAHF-12  食品经营许可证
违法和不良信息举报电话：185-0130-1238 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footerList: {
        "帮助中心": ['账户管理','购物指南','订单操作'],
        "服务支持":['售后服务','自助服务','相关下载'],
        "线下门店":['小米之家','服务站点','授权体验店'],
        "关于小米":['了解小米','加入小米','投资者关系','企业社会责任','廉洁举报'],
        "关注我们":['新浪微博','官方微信','联系我们','公益基金会'],
        "特色服务":['F码通道','礼物码','防伪查询'],
      }
    };
  },
  methods: {},
  created(){
     
  }
};
</script>

<style scoped>
.footer .mibottom{
  margin-top: 50px;
  color: #333;
  line-height: 35px;
  font-size: 14px;
  border-top:1px solid  #e0e0e0;
}
.footer  .bottom {
    width: 1226px;
    height: 192px;
}
.footer .bottom  .oneul{
    color: #424242;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
     width: 1226px;
    padding-top: 15px;

    height: 192px;
}
.footer .bottom  .oneul .oneli{
    width: 160px;
}
.footer .bottom  .twoul{
    color: #757575;
    display: flex;
    flex-direction: column;
    padding-top: 15px;

    justify-content: flex-end;
}
.footer .bottom  .twoul li {
    cursor: pointer;
    margin:  8px 0;
}
.footer .bottom  .twoul li:hover{
    color: #ff6700;
}
@font-face {
  font-family: "iconfont";
  src: url("../../../public/font/font_i2nbenshfym/iconfont.eot");
  src: url("../../../public/font/font_i2nbenshfym/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("../../../public/font/font_i2nbenshfym/iconfont.woff2") format("woff2"),
    url("../../../public/font/font_i2nbenshfym/iconfont.woff") format("woff"),
    url("../../../public/font/font_i2nbenshfym/iconfont.ttf") format("truetype"),
    url("../../../public/font/font_i2nbenshfym/iconfont.svg#iconfont")
      format("svg");
}
.footer {
  width: 1226px;
  margin: 0 auto;
}
.footer .top ul {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 1226px;
  background-color: #fff;

  height: 80px;
}
.footer .top ul li {
  cursor: pointer;
  color: #616161;
  transition: all 0.5s;
  width: 243px;
  height: 25px;
  text-align: center;
  margin: 25px;
}
.footer .top ul span.sh {
  text-align: center;
  line-height: 25px;
  color: #e0e0e0;
}
.footer .top ul li:hover {
  color: #ff6700;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>