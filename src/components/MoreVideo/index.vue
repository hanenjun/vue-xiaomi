<template>
  <div class="video">
    <div class="content">
        <ul>
            <li v-for="(item,index) in videoList" :key="index" @click="play(item)">
                <i class="fa fa-play"></i>
                <img :src="item.img_url" alt="" srcset="">
                <h5>{{item.title}}</h5>
                <span>{{item.miaoshu}}</span>
            </li>
        </ul>
        <div class="mark" v-show="mark">
            <div class="top">{{video_title}} <i @click="close" class="fa fa-close"></i></div>
            <video :src="video_src" autoplay  controls ref="video"></video>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "视频",
      videoList:[
          {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',title:'Redmi 10X系列发布会',miaoshu:'Redmi 10X系列发布会',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b421cc33786a5d49e07f173e75cf058.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
           {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',title:'小米10 青春版 发布会',miaoshu:'',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
            {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4',title:'小米10 8K 手机拍大片 ',miaoshu:'',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
             {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4',title:'小米10 发布会',miaoshu:'',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
               {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4',title:'Redmi 10X系列发布会',miaoshu:'Redmi 10X系列发布会',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b421cc33786a5d49e07f173e75cf058.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
           {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4',title:'小米10 青春版 发布会',miaoshu:'',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96563e75833ba4563bd469dd28203b09.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
            {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4',title:'小米10 8K 手机拍大片 ',miaoshu:'',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2fd26bb99b723337a2f8eaba84f7d5bb.jpg?thumb=1&w=296&h=180&f=webp&q=90'},
             {video_src:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4',title:'小米10 发布会',miaoshu:'',img_url:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8dd25cab48c60fc6387b9001eddc3f9.jpg?thumb=1&w=296&h=180&f=webp&q=90'}
      ],
      mark:false,
      video_src:'',
      video_title:''
    };
  },
  methods:{
      play(video){
          this.video_src =video.video_src
          this.video_title = video.title
          this.mark = true
      },
      close(){
          this.$refs.video.pause()
           this.video_src =null;
          this.video_title = null
          this.mark = false
      }
  }
};
</script>

<style scoped>
.video{
  width: 1226px;
  margin:  0 auto;
}
.video .content{
    width: 1226px;
    /* height: 299px; */
    margin-top: 15px;
}
.video .content ul {
  flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 1226px;
    /* height: 299px; */
}
.video .content ul li h5{
    color: #333;
    text-align: center;
    margin-top: 10px;
}
.video .content ul li span{
    width: 100%;
    color: #b0b0b0;
    display: block;
    text-align: center;
    margin:  15px 0;
}
.video .content ul li {
  background-color: #fff;
    position: relative;
    transition: all .5s;
    cursor: pointer;
    margin: 13px;
    width: 280px;
    height: 285px;
}
.video .content ul li i {
    position: absolute;
    color: #fff;
    font-size: 30px;
    bottom: 120px;
    left: 15px;
}
.video .content ul li i:hover{
    color: #ff6700;
}
.video .content ul li:hover{
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate(0,-10px);
}
.video {
  width: 1226px;
  margin: 0 auto;
}
.video .font {
  margin-top: 15px;
  height: 50px;
  position: relative;
  width: 1226px;
  display: flex;
  flex-direction: row;
}
.video .font h3 {
  cursor: pointer;

  color: #333;
  font-size: 18px;
  margin-top: 15px;
  display: inline;
  position: absolute;
  right: 50px;
}
.video .font h3:hover {
  color: #ff6700;
}
.video .font h3 i {
  width: 30px;
  height: 30px;
  /* border-radius: 50%; */
  /* background-color: #b0b0b0; */
  margin-left: px;
  text-align: center;
  line-height: 30px;
}
.video .font h2 {
  color: #333;
  display: inline;
  left: 100px;
}
.video .mark{
    width:880px ;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* height: 555px; */
    position: fixed;
}
.video .mark .top i{
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 20px;
}
.video .mark .top{
    position: relative;
    width: 100%;
    height: 60px;
    background-color: #fff;
    line-height: 60px;
    font-size: 18px;
    color: #424242;
    font-weight: 400px;
}
.video .mark video{
    /* height:495px ; */
    width: 880px;
}
</style>