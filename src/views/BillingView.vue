<template>
  <!-- Hero Section-->
  <div id="hero" class="w-full mt-2 mb-14 bg-brightCyanLight">
    <BannerComponent />
  </div>

  <!-- Billing Section -->
  <div class="container bg-white flex flex-row px-10 space-x-6 mb-16 mx-auto">
    <!-- Billing Details and Summary -->
    <div class="flex flex-col w-2/3">
      <!-- Billing Details -->
      <BillingDetails />
    </div>
    <!-- Order Summary -->
    <OrderSummary />
  </div>
</template>
<script>
import { watchEffect } from "vue";
import { mapState } from "vuex";
import BillingDetails from "@/components/BillingDetails.vue";
import OrderSummary from "@/components/OrderSummary.vue";
import BannerComponent from "@/components/BannerComponent.vue";

export default {
  name: "BillingView",
  components: {
    BillingDetails,
    OrderSummary,
    BannerComponent,
  },
  created() {
    watchEffect(() => {
      const login = this.user.login;
      !login ? this.$router.replace({ name: "login" }) : "";
    });
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>
