<template>
  <div
    class="flex flex-col h-full w-1/3 p-4 pl-6 pr-6 pb-6 bg-white space-y-5 rounded-lg drop-shadow-2xl"
  >
    <!-- Header -->
    <h2 class="text-xl font-bold tracking-tight">Your Order Summary</h2>
    <!-- Summary Items -->
    <div
      class="flex flex-col border-b-2 border-veryLightGray divide-y-2 divide-veryLightGray w-full"
    >
      <SummaryItem v-for="item in itemsInCart" :key="item.id" :item="item" />
    </div>
    <!-- Buttons -->
    <div class="flex justify-between">
      <button
        class="px-6 py-2 text-lg font-semibold rounded-lg bg-veryLightGray text-brihtGrayishCyan"
      >
        Coupon Code
      </button>
      <button
        class="px-6 py-2 text-lg font-semibold rounded-lg bg-brightCyan text-white border-2 hover:bg-white hover:border-brightCyan hover:text-brightCyan"
      >
        Apply Coupon
      </button>
    </div>
    <!-- Total and Subtotal -->
    <div class="space-y-2">
      <div class="flex justify-between text-xl">
        <p>SubTotal</p>
        <p class="font-bold">NGN{{ totalPrice }}</p>
      </div>
      <div
        class="flex pb-2 justify-between text-xl border-b-2 border-veryLightGray"
      >
        <p>Shipping</p>
        <p class="font-bold">NGN{{ 0 }}</p>
      </div>
      <div class="flex justify-between text-xl">
        <p>Total</p>
        <p class="font-bold">NGN{{ totalPrice }}</p>
      </div>
    </div>
    <p class="text-brihtGrayishCyan">
      <b>NB:</b> Shipping and taxes calculated at checkout
    </p>
    <!-- Buttons -->
    <div class="w-full">
      <router-link
        :to="{ name: 'checkout' }"
        class="text-center block w-full px-6 py-2 text-lg font-semibold rounded-lg bg-brightCyan text-white border-2 hover:bg-white hover:border-brightCyan hover:text-brightCyan"
      >
        Pay
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SummaryItem from "@/components/SummaryItem.vue";
export default {
  name: "OrderSummary",

  components: {
    SummaryItem,
  },
  computed: {
    ...mapGetters("shoppingCart", ["totalPrice", "itemsInCart"]),
  },
};
</script>

<style></style>
