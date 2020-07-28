<template>
    <div class="main">
        <LightningDeals></LightningDeals>
        <XmPlainBox></XmPlainBox>
        <XmPlainBoxs></XmPlainBoxs>
        <HomeVideo></HomeVideo>
    </div>
</template>
<script>
import LightningDeals from  '../LightningDeals/index'
import XmPlainBox from '../XmPlainBox/index';
import XmPlainBoxs from '../XmPlainBoxs/index';
import HomeVideo from '../HomeVideo/index';
export default {
    components:{
        LightningDeals,
        XmPlainBox,
        XmPlainBoxs,
        HomeVideo
    }
}
</script>

<style scoped>
    .main{
        width: 100%;
        background-color: #f5f5f5;
    }
</style>