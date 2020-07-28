<template>
    <div class="seckill">
        <SiteTopbar></SiteTopbar>
        <SiteHeader></SiteHeader>
        <Seckill></Seckill>
        <Footer></Footer>
    </div>
</template>

<script>
import Seckill from '../components/Seckill/index';
import SiteTopbar from "../components/SiteTopbar";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer/index";
export default {
    components:{
        Seckill,
        SiteTopbar,
        SiteHeader,
        Footer
    }
}
</script>

<style scoped>
    .seckill{
        background: #f5f5f5;
    }
</style>