<template>
  <div
    class="flex flex-col w-1/3 h-110 p-4 pl-6 pr-6 space-y-5 rounded-lg bg-white drop-shadow-2xl"
  >
    <!-- Header -->
    <h2 class="text-2xl font-bold tracking-tight">Cart Total</h2>
    <!-- Buttons -->
    <div class="flex justify-between">
      <button
        class="px-6 py-3 pt-2 text-lg font-semibold rounded-lg bg-veryLightGray text-brihtGrayishCyan"
      >
        Coupon Code
      </button>
      <button
        class="px-6 py-3 text-lg font-semibold rounded-lg bg-brightCyan text-white border-2 hover:bg-white hover:border-brightCyan hover:text-brightCyan"
      >
        Apply Coupon
      </button>
    </div>
    <!-- Note -->
    <h2 class="text-2xl font-bold tracking-tight">Note</h2>
    <p class="text-brihtGrayishCyan">
      Add special instructions for your seller...
    </p>
    <textarea
      name=""
      id=""
      class="w-full rounded-lg p-4 pl-6 text-veryDarkCyan outline-none border-veryLightGray border"
      cols="4"
      rows="6"
      placeholder="Start Typing..."
    ></textarea>
    <div class="flex flex-row justify-between">
      <div class="flex flex-col w-28">
        <h3 class="text-2xl">SubTotal</h3>
        <h3 class="text-2xl">Total</h3>
      </div>
      <div class="flex flex-col">
        <h3 class="text-lg font-bold">NGN{{ totalPrice }}</h3>
        <h3 class="text-lg font-bold">NGN{{ totalPrice }}</h3>
      </div>
    </div>
    <p class="text-brihtGrayishCyan">
      Shipping and taxes calculated at checkout
    </p>
    <!-- Buttons -->
    <div class="flex justify-between">
      <button
        class="px-6 py-2 text-lg font-semibold rounded-lg bg-gray text-white"
      >
        Update Cart
      </button>
      <router-link
        :to="{
          name: isLogin ? 'billing' : 'login',
          query: { next: 'billing', prev: 'checkout' },
        }"
        class="px-6 py-2 text-lg font-semibold rounded-lg bg-brightCyan text-white border-2 hover:bg-white hover:border-brightCyan hover:text-brightCyan"
      >
        Checkout
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "TotalCard",
  computed: {
    isLogin() {
      return this.user.login ? true : false;
    },
    ...mapState("user", ["user"]),
    ...mapGetters("shoppingCart", ["totalPrice"]),
  },
};
</script>

<style></style>
