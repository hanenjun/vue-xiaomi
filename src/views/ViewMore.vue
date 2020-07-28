<template>
  <div class="ViewMore">
      <SiteTopbar></SiteTopbar>
      <SiteHeader></SiteHeader>
    <ViewMore></ViewMore>
    <Footer></Footer>
  </div>
</template>

<script>
import ViewMore from "../components/ViewMore/index.vue";
import SiteTopbar from "../components/SiteTopbar";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer/index";
export default {
  components: {
    ViewMore,
    SiteTopbar,
    SiteHeader,
    Footer
  }
};
</script>

<style scoped>
.ViewMore {
  width: 100%;
  background-color: #f5f5f5;
}
</style>