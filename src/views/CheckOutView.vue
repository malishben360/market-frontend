<template>
  <!-- Hero Section-->
  <div id="hero" class="w-full mt-2 mb-14 bg-brightCyanLight">
    <BannerComponent />
  </div>

  <!-- Cart Section -->
  <div class="container flex px-10 space-x-6 mb-16 mx-auto">
    <!-- Shooping Carts -->
    <div class="flex flex-col space-y-3 w-2/3">
      <!-- Continue Shopping -->
      <div class="w-full h-10 text-right">
        <router-link
          :to="{ name: 'recipes' }"
          class="text-xl font-bold hover:text-brightCyan"
        >
          <span class="text-2xl">&lt;</span>
          Continue Shopping</router-link
        >
      </div>
      <!-- Carts -->
      <CartCard v-for="item in itemsInCart" :key="item.id" :item="item" />
    </div>
    <!-- Cart Total-->
    <TotalCard />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

import CartCard from "@/components/CartCard.vue";
import TotalCard from "@/components/TotalCard.vue";
import BannerComponent from "@/components/BannerComponent.vue";

export default {
  name: "CheckOutView",
  components: {
    CartCard,
    TotalCard,
    BannerComponent,
  },
  computed: {
    ...mapGetters("shoppingCart", ["itemsInCart"]),
  },
};
</script>
