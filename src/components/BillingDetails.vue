<template>
  <!-- Billing Details -->
  <div
    class="flex flex-col w-full h-fit p-6 pt-2 rounded-lg bg-white drop-shadow-xl"
  >
    <h2 class="pt-3 pb-8 text-xl font-bold">Billing Details</h2>
    <form>
      <!-- Names -->
      <div class="flex flex-row justify-between">
        <div class="flex flex-col space-y-3 mb-8 w-90">
          <label for="firstName">First Name</label>
          <input
            type="text"
            class="pl-4 py-2 border border-veryLightGray rounded-sm focus:outline-none"
            placeholder="e.g Maria"
          />
        </div>
        <div class="flex flex-col mb-8 space-y-3 w-90">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            class="pl-4 py-2 border border-veryLightGray rounded-sm focus:outline-none"
            placeholder="e.g ilo"
          />
        </div>
      </div>
      <div class="flex flex-row mb-8 justify-between">
        <div class="flex flex-col space-y-3 w-90">
          <label for="firstName">Town</label>
          <input
            type="text"
            class="pl-4 py-2 border border-veryLightGray rounded-sm focus:outline-none"
            placeholder="e.g Eti-Osa"
          />
        </div>
        <div class="flex flex-col space-y-3 w-90">
          <label for="lastName">Postal Code</label>
          <input
            type="text"
            class="pl-4 py-2 border border-veryLightGray rounded-sm focus:outline-none"
            placeholder="e.g 1019108"
          />
        </div>
      </div>
      <div class="flex flex-row mb-8 justify-between">
        <div class="flex flex-col space-y-3 w-full">
          <label for="address">Address</label>
          <textarea
            class="p-4 pt-2 border rounded-sm border-veryLightGray focus:outline-none"
            placeholder="e.g apartment, suites, etc."
            rows="5"
          ></textarea>
        </div>
      </div>
      <!-- Remember Me-->
      <div class="flex flex-row items-center mb-8 space-x-4">
        <input type="checkbox" name="" id="" class="w-6 h-6" />
        <label class="text-lg font-semibold" for="remember"
          >Save this information for next time</label
        >
      </div>
      <!-- Order Note -->
      <div class="flex flex-row mb-8 justify-between">
        <div class="flex flex-col space-y-3 w-full">
          <label for="address">Order Note</label>
          <textarea
            class="p-4 pt-2 border rounded-sm border-veryLightGray focus:outline-none"
            placeholder="e.g apartment, suites, etc."
            rows="1"
          ></textarea>
        </div>
      </div>
      <!-- Buttons -->
      <div class="flex flex-row items-center space-x-4">
        <router-link
          :to="{ name: 'recipes' }"
          class="text-center block px-6 py-2 text-lg font-semibold rounded-lg bg-brightCyan text-white border-2 hover:bg-white hover:border-brightCyan hover:text-brightCyan"
        >
          Continue to Shopping
        </router-link>
        <router-link
          :to="{ name: 'checkout' }"
          class="text-center block px-6 py-2 text-lg font-semibold rounded-lg bg-brightCyan text-white border-2 hover:bg-white hover:border-brightCyan hover:text-brightCyan"
        >
          Return to Cart
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BillingDetails",

  methods: {},
  computed: {},
  setup() {
    return {};
  },
});
</script>

<style></style>
