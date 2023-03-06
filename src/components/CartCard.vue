<template>
  <!-- Cart -->
  <div
    class="flex w-full justify-between items-center h-32 pt-2 pb-4 pl-4 border-2 border-veryLightGray"
  >
    <!-- Cancel Icon -->
    <div class="w-16">
      <img
        src="img/delete.svg"
        class="transition w-8 h-8 -mt-10 hover:scale-110"
        alt="delete"
        @click="showModal"
      />
    </div>
    <!-- Image -->
    <div class="w-28">
      <img :src="img" :alt="recipe.img" />
    </div>
    <!-- Info -->
    <div class="flex flex-col space-y-2 w-1/5">
      <span class="text-2xl capitalize">{{ recipe.title }} Recipe</span>
      <span class="text-xl font-bold">NGN{{ recipe.price }}</span>
    </div>
    <!-- Quantity -->
    <div class="flex flex-col space-y-2 w-1/5">
      <span class="text-2xl">Quantity</span>
      <div class="flex flex-row h-12">
        <input
          type="number"
          class="text-3xl pl-4 w-24 h-12 focus:outline-none bg-veryLightGray"
          :value="recipe.quantity"
        />
        <div class="flex h-12 -mt-1 -ml-10 -space-y-4 flex-col">
          <button
            class="text-3xl font-bold -rotate-90 hover:bg-gray"
            @click="increaseQuantity"
          >
            &gt;
          </button>
          <button
            class="text-3xl font-bold -rotate-90 hover:bg-gray"
            @click="reduceQuantity"
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
    <!-- Total -->
    <div class="flex flex-col space-y-2 w-1/5">
      <span class="text-2xl">SubTotal</span>
      <span class="text-xl font-bold">NGN{{ subTotal }}</span>
    </div>
    <!-- Modal -->
    <div
      ref="confirmModal"
      data-te-modal-init
      class="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      tabindex="-1"
      aria-modal="true"
      role="dialog"
    >
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[300px]"
      >
        <div
          class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600"
        >
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            <h5
              class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalSmLabel"
            >
              Delete Item
            </h5>
            <button
              type="button"
              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-between rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"
          >
            <button
              type="button"
              class="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Cancelled
            </button>
            <button
              type="button"
              class="ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              @click="removeCart"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import * as te from "tw-elements";

export default defineComponent({
  name: "CartCard",

  props: {
    item: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      recipe: this.item,
      confirmModal: null,
    };
  },
  methods: {
    increaseQuantity() {
      this.recipe.quantity += 1;
      this.editItemInCart(this.recipe);
    },
    reduceQuantity() {
      if (this.recipe.quantity >= 2) {
        this.recipe.quantity -= 1;
        this.editItemInCart(this.recipe);
      } else {
        this.showModal();
      }
    },
    removeCart() {
      this.removeItemFromCart(this.recipe);
      this.confirmModal.toggle();
      if (this.itemsInCart.length < 1)
        this.$router.replace({ name: "recipes" });
    },
    showModal() {
      this.confirmModal = new te.Modal(this.$refs.confirmModal, {});
      this.confirmModal.show();
    },
    ...mapActions("shoppingCart", ["removeItemFromCart", "editItemInCart"]),
  },
  computed: {
    img() {
      return "img/" + this.recipe.name + ".svg";
    },
    subTotal() {
      return this.recipe.price * this.recipe.quantity;
    },
    ...mapGetters("shoppingCart", ["itemsInCart"]),
  },
});
</script>

<style></style>
