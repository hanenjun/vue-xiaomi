<template>
  <div>
    <SiteTopbar></SiteTopbar>
    <SiteHeader></SiteHeader>
    <div class="me">
      <Me></Me>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Me from "../components/Me/index";
import SiteTopbar from "../components/SiteTopbar";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer/index";
export default {
  components: {
    Me,
    SiteTopbar,
    SiteHeader,
    Footer
  }
};
</script>

<style scoped>
.me {
  background-color: #f5f5f5;
  /* width: 1226px; */
  margin: 0 auto;
}
</style>