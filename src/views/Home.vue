<template>
    <div class="homem">
        <SiteTopbar></SiteTopbar>
        <SiteHeader></SiteHeader>
        <HomeHeroContainer></HomeHeroContainer>
        <row></row>
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<script>
import SiteTopbar from '../components/SiteTopbar';
import SiteHeader from '../components/SiteHeader';
import HomeHeroContainer from '../components/HomeHeroContainer/index'
import Main from '../components/Main/index';
import row from '../components/HomeHeroSub/index';
import Footer from '../components/Footer/index';

export default {
    components:{
        HomeHeroContainer,
        row,
        Main,
        SiteTopbar,
        SiteHeader,
        Footer
      
    }
}
</script>

<style scoped>

</style>