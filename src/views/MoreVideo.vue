<template>
    <div class="MoreVideo">
        <SiteTopbar></SiteTopbar>

        <SiteHeader></SiteHeader>
        <MoreVideo></MoreVideo>
        <Footer></Footer>
    </div>
</template>
<script>
import SiteTopbar from "../components/SiteTopbar";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer/index";
import  MoreVideo from '../components/MoreVideo/index'
export default {
      components: {
    MoreVideo,
    SiteTopbar,
    SiteHeader,
    Footer
  }
}
</script>

<style scoped>
.MoreVideo{
    width: 100%;
    background: #f5f5f5;
}
</style>