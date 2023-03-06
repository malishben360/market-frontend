<template>
  <!-- Recipes Section -->
  <section id="recipes" class="container mx-auto">
    <!-- Flex Container -->
    <div
      class="flex container flex-col px-6 mt-14 items-center space-x-0 space-y-8"
    >
      <!-- Header -->
      <div class="flex px-8 justify-between h-32 w-full">
        <div class="flex flex-col">
          <!-- Icon -->
          <div class="h-12 w-12">
            <img src="img/icon-dish.svg" alt="dish" />
          </div>
          <!-- Links -->
          <div class="flex space-x-2">
            <a
              href="#"
              class="text-lg font-semibold tracking-tight hover:text-brightCyan"
              >All</a
            >
            <p>|</p>
            <a
              href="#"
              class="text-lg font-semibold tracking-tight hover:text-brightCyan"
            >
              Home Recipe</a
            >
            <p>|</p>
            <a
              href="#"
              class="text-lg font-semibold tracking-tight hover:text-brightCyan"
              >Restaurant Recipe</a
            >
            <p>|</p>
            <a
              href="#"
              class="text-lg font-semibold tracking-tight hover:text-brightCyan"
              >Local Recipe</a
            >
          </div>
          <h2 class="text-4xl tracking-tight font-bold">
            Browse Popular Categories
          </h2>
        </div>
        <!-- Link -->
        <div class="flex flex-col items-end justify-end">
          <button
            class="text-xl font-semibold tracking-tight text-gray hover:text-brightCyan"
            @click="recipesByCategory('recipes')"
          >
            View All Recipe
            <span class="text-2xl font-extrabold inline h-6 pl-2">&gt;</span>
          </button>
        </div>
      </div>

      <!-- Category -->
      <div class="flex container px-8 space-x-6">
        <!--Cat 1 -->
        <CategoryCard
          v-for="category in allCategories"
          :key="category"
          :category="category"
          @click="recipesByCategory(category)"
        />
      </div>

      <!-- Carts Container -->
      <div class="grid grid-cols-3 gap-5 px-8">
        <!-- Carts -->
        <RecipeCard
          v-for="(recipe, index) in recipes"
          :key="index"
          :recipe="recipe"
        />
      </div>
      <div>
        <p
          v-show="!recipes.length"
          class="p-14 text-4xl font-serif w-full text-center text-veryLightGray"
        >
          Sorry we are out of {{ category }}, check back later.
        </p>
      </div>

      <!-- Pagination -->
      <div
        v-show="recipes.length"
        class="flex p-8 space-x-6 justify-center items-center container"
      >
        <div>
          <button class="w-4 h-4 text-2xl font-extrabold hover:text-brightCyan">
            &lt;
          </button>
        </div>
        <div class="flex space-x-2">
          <button
            class="w-8 h-8 text-center rounded-full hover:bg-brightCyan hover:text-white focus:text-white focus:bg-brightCyan focus:ring focus:ring-brightCyan"
            v-for="page in pages"
            :key="page"
          >
            {{ page }}
          </button>
        </div>
        <div>
          <button class="w-4 h-4 text-2xl font-extrabold hover:text-brightCyan">
            &gt;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import RecipeCard from "@/components/RecipeCard.vue";
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  name: "RecipeView",

  components: {
    RecipeCard,
    CategoryCard,
  },
  data() {
    return {
      recipes: [],
      category: "recipes",
    };
  },
  async created() {
    try {
      await this.fetchRecipes();
      await this.fetchCategories();
      this.recipesByCategory("recipes");
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    recipesByCategory(category) {
      this.recipes = this.getRecipeByCategory(category);
      this.category = category;
    },
    ...mapActions("recipes", ["fetchRecipes"]),
    ...mapActions("categories", ["fetchCategories"]),
  },
  computed: {
    pages() {
      return Math.ceil(this.recipes.length / 6);
    },
    ...mapGetters("recipes", ["getRecipeByCategory"]),
    ...mapGetters("categories", ["allCategories"]),
  },
};
</script>
