<template>
  <div class="search">
      <SiteTopbar></SiteTopbar>
      <SiteHeader></SiteHeader>
    <Search></Search>
    <Footer></Footer>
  </div>
</template>

<script>
import Search from "../components/search/index.vue";
import SiteTopbar from "../components/SiteTopbar";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer/index";
export default {
  components: {
    Search,
    SiteTopbar,
    SiteHeader,
    Footer
  }
};
</script>

<style scoped>
.search{
  width: 100%;
  background: #f5f5f5;
}
</style>