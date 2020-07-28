<template>
    <div class="content">
        <img src="http://s1.mi.com/m/ghd/2016/x0718m03/static/img/404.3ec06ef.jpg">
        <div class="fonts">
            <h1 class="font">咦~页面不见了~</h1>
            <h3 class="gotohome" @click="gotohome">返回首页</h3>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        gotohome(){
            this.$router.push({
                name:'home'
            })
        }
    }
}
</script>
<style scoped>
.content{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
img{
    position: absolute;
    transform: translate(-50%,10%);
    top: 50%;
    left: 50%;
    width: 467px;
    height: 400px;
    display: block;
    margin-top: 15px;
}
.fonts{
    position: absolute;
    top: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.fonts .font{
    margin: 15px 0;
}
h3{
    color: #0b72a4;
    cursor: pointer;
} 
</style>