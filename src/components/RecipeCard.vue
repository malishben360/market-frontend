<template>
  <div
    class="flex flex-col flex-1 px-2 pt-3 pb-5 space-y-6 bg-white rounded-md drop-shadow-xl"
  >
    <!-- Image -->
    <div
      class="border border-l-0 border-y-2 border-y-brightCyan border-r-brightCyanLight rounded-md"
    >
      <img :src="img" :alt="recipe.img" />
    </div>
    <!-- Title Price and Rating-->
    <div class="flex px-6 justify-between">
      <!-- Title and Rating -->
      <div class="flex flex-col space-y-4">
        <h3 class="text-2xl font-bold tracking-tight">{{ recipe.title }}</h3>
        <div class="flex space-x-1">
          <img
            v-for="star in recipe.stars"
            :key="star"
            :src="starIcon"
            class="w-4"
            alt="star-icon"
          />
        </div>
      </div>
      <!-- Price -->
      <div class="flex flex-col justify-end">
        <h3 class="text-lg tracking-tight font-bold">NGN{{ recipe.price }}</h3>
      </div>
    </div>
    <p class="text-lg px-6 font-semibold">
      {{ recipe.description }}
    </p>
    <!-- Button -->
    <button
      class="py-3 mx-2 font-bold text-white border-2 rounded-lg bg-brightCyan border-brightCyan hover:text-brightCyan hover:bg-white"
      @click="addToCart"
    >
      Add to Cart
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "RecipeCard",

  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },

  computed: {
    img() {
      return "img/" + this.recipe.name + ".svg";
    },
    starIcon() {
      return "img/star-icon.svg";
    },
  },
  methods: {
    addToCart() {
      const newCartItem = { ...this.recipe, quantity: 1 };
      this.addItemToCart(newCartItem);
    },
    ...mapActions("shoppingCart", ["addItemToCart"]),
  },
};
</script>
