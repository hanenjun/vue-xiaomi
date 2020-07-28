<template>
  <div class="ShowMore">
    <div class="top">
      <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64958bf7296a1c054a78ce29c629e731.jpg" alt />
    </div>
    <div class="banner">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b13a0f242d83c42a76f8a6accdd967ed.jpg"
        alt
      />
    </div>

    <div class="content" v-for="(item,index) in topList" :key="index">
      
        <div class="shop">
        <img
          :src="item.img_url"
          alt
        />
        <div class="font">
          <h3>{{item.title}}</h3>
          <span>{{item.miaoshu}}</span>
          <h5>¥{{item.price}}起</h5>
          <router-link :to="{name:'details',params:{id:1}}"><button>立即购买</button></router-link>
        </div>
      </div>
      
    </div>
    <div class="banner">
      <img
        src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de4619fd1d58fe0e95ca45a97beef33d.jpg"
        alt
      />
    </div>

    <div class="contentmargin"> 
          <div class="contenttwo" v-for="(item,index) in bottomList" :key="index">
      <img
        :src="item.img_url"
        alt
      />
      <div class="font">
        <h3>{{item.title}}</h3>
        <span>{{item.miaoshu}}</span>
        <h5>¥{{item.price}}起</h5>
       <router-link :to="{name:'details',params:{id:1}}"> <button>立即购买</button></router-link>
      </div>
    </div>
    
    </div>
        <div class="content">
      <div class="shop">
        <img
          :src="last.img_url"
          alt
        />
        <div class="font">
          <h3>{{last.title}}</h3>
          <span>{{last.miaoshu}}</span>
          <h5>¥{{last.price}}起</h5>
          <router-link :to="{name:'details',params:{id:1}}"><button>立即购买</button></router-link>
        </div>
      </div>
    </div>



 
  </div>
</template>
<script>
export default {
  data(){
    return{
      topList:[
        {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f2649d981a5cadffe29dfeaa10c3d1d0.jpg?w=1708&h=868',title:'小米10',miaoshu:'骁龙865处理器/1亿像素8K电影相机',price:'3999'},
        {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e25131b652ef1f2bd624c686997ddbd.jpg?w=1708&h=868',title:"小米10 Pro",price:"4999",miaoshu:"骁龙865处理器 / 50倍数字变焦"},
        {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/90585539f66ccd4356aeac6e7bbb5dad.jpg?w=1708&h=868',title:"Redmi K30 Pro",price:"2999",miaoshu:"双模5G，骁龙865，弹出全面屏，6400万高清四摄"},
        {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b33b75a39248b5195c41c9a16bce9fb.jpg?w=1708&h=868',title:"Redmi K30 Pro 变焦版",price:"3799",miaoshu:"双模5G，骁龙865，弹出全面屏，索尼6400万双光学防抖四摄"}
      ],
      bottomList:[
        {img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/61466261e8001f3f18991f6abff46ccf.jpg?w=1212&h=716',price:"1599",title:"Redmi K30",miaoshu:'120Hz流速屏，全速热爱'},
        {img_url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6ea8d70aa2ebeabd41d5596b3498768.jpg?w=1212&h=716",price:"1999",miaoshu:"双模5G，120Hz流速屏",title:"Redmi K30 5G"},
        {img_url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a99bc6d6d5743a186950f235cca930e.jpg?w=1212&h=716",price:"1199",miaoshu:"6400万全场景四摄",title:"Redmi Note 8 Pro"},
        {img_url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/465ea7594d174311d85ba9b58b4c7137.jpg?w=1212&h=716",price:"899",miaoshu:"千元4800万四摄",title:"Redmi Note 8"},
        {img_url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d62a97b5c65e2f62ffd7cafcb6dd3361.jpg?w=1212&h=716",price:"3499",miaoshu:"骁龙865 / 270Hz触控采样率",title:"腾讯黑鲨游戏手机3"},
        {img_url:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/89a7f5ab007583a2cbd8fd759f2262ea.jpg?w=1212&h=716",price:"4699",miaoshu:"骁龙865 / 升降式按键",title:"腾讯黑鲨游戏手机3 Pro"},
      ],
      last:{
        img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2b33b75a39248b5195c41c9a16bce9fb.jpg?w=1708&h=868',
        title:'Redmi K30 Pro准版',
        miaoshu:'双模5G，骁龙865，投放全面屏，索尼6400万双光学防抖四摄',
        price:'3799'
      }
    }
  }
}
</script>
<style scoped>
.ShowMore .content:last-child{
    
}
.contentmargin{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1226px;
    flex-wrap: wrap;
    margin: 0 auto;
}
.contenttwo .font h3{
    color: #242424;
    font-size: 24px;
    font-weight: normal;
    position: absolute;
    top: 400px;
    margin-left: 25px;
}
.contenttwo .font span{
    color: #666;
    font-size: 16px;
    position: absolute;
    top: 430px;
    margin-left: 25px;
}
.contenttwo .font h5{
    color: rgb(234, 98, 91);
    font-size: 24px;
    font-weight: normal;
     position: absolute;
    top: 400px;
    right: 0;
    margin-right: 25px;
}
.contenttwo .font button{
     position: absolute;
    top: 440px;
    right: 0;
    margin-right: 25px;

  background: rgb(234, 98, 91);
  color: rgb(255, 255, 255);
  width: 160px;
  height: 44px;
  border: none;
  outline: none;
  cursor: pointer;
}
.contenttwo{
    margin: 15px 0;
    position: relative;
}
.contenttwo img{
    width: 100%;
    height: 358px;
}
.contenttwo{
    width: 606px;
    height: 492px;
    background: #fff;
}
.banner {
  width: 100%;
  height: 167px;
}
.banner img {
  height: 100%;
  width: 100%;
}
.content .font h3 {
  /* position: absolute; */
  margin-bottom: 15px;
}
.content .font button {
  position: absolute;
  top: 300px;
  left: 40px;
  background: rgb(234, 98, 91);
  color: rgb(255, 255, 255);
  width: 160px;
  height: 44px;
  border: none;
  outline: none;
  cursor: pointer;
}
.content .font h5 {
  position: absolute;
  top: 230px;
  font-size: 24px;
  color: rgb(234, 98, 91);
}
.content .font {
  position: absolute;
  top: 0;
  display: inline-block;
  width: 330px;
  height: 319px;
  padding-top: 105px;
  padding-left: 42px;
}
.content img {
  width: 854px;
  height: 434px;
}
.content,
.content .shop {
  position: relative;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 20px;
  width: 1226px;
  height: 434px;
  background: #fff;
}
.ShowMore .top img {
  /* height: 100%; */
  width: 100%;
}
.ShowMore .top {
  width: 100%;
  /* height: 799px; */
}
.ShowMore {
  background: rgb(234, 135, 94);
}
</style>