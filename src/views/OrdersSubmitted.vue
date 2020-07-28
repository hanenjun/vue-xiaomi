<template>
  <div class="Order-submitted">
      <SiteTopbar></SiteTopbar>
      <SiteHeader></SiteHeader>
        <OrdersSubmitted></OrdersSubmitted>
    <Footer></Footer>
  </div>
</template>

<script>
import OrdersSubmitted from '../components/OrdersSubmitted/index';
import SiteTopbar from "../components/SiteTopbar";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer/index";
export default {
  components: {
    OrdersSubmitted,
    SiteTopbar,
    SiteHeader,
    Footer
  }
};
</script>

<style scoped>
.Order-submitted {
  width: 100%;
  background-color: #f5f5f5;
  /* height: 450px; */
}
</style>