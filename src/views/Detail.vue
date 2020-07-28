<template>
    <div>
        <SiteTopbar></SiteTopbar>
        <SiteHeader></SiteHeader>
        <Detail :id="id"></Detail>
        <Footer></Footer>
    </div>
</template>

<script>
import Detail from '../components/GoodsDetails/index.vue';
import SiteTopbar from '../components/SiteTopbar';
import SiteHeader from '../components/SiteHeader';
import Footer from '../components/Footer';
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    components:{
        Detail,
        SiteTopbar,
        SiteHeader,
        Footer
    },
    created(){
        
    }
}
</script>