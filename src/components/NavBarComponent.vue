<template>
  <nav>
    <!-- Flex Container-->
    <div
      class="container flex p-3 pt-2 px-10 mt-5 items-center justify-between mx-auto bg-white drop-shadow-xl h-24"
    >
      <!-- Logo -->
      <div class="flex w-screen lg:w-1/5 justify-center lg:justify-start">
        <h1
          class="text-5xl lg:text-4xl font-pacific lg:font-sans font-bold text-brightCyan"
        >
          9jaRecipe
        </h1>
      </div>

      <!-- Menu List -->
      <div
        class="hidden flex-1 flex-col px-14 justify-around lg:flex-row lg:flex"
      >
        <router-link
          :to="{ name: 'home' }"
          class="text-xl hover:font-bold hover:text-brightCyan hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-brightCyan"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'about' }"
          class="text-xl hover:font-bold hover:text-brightCyan hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-brightCyan"
          >About</router-link
        >
        <router-link
          :to="{ name: 'recipes' }"
          class="text-xl hover:font-bold hover:text-brightCyan hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-brightCyan"
          >Recipes</router-link
        >
        <a
          href="#"
          class="text-xl hover:font-bold hover:text-brightCyan hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-brightCyan"
          >Shop</a
        >
        <a
          href="#"
          class="text-xl hover:font-bold hover:text-brightCyan hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-brightCyan"
          >Contact</a
        >
      </div>
      <!-- Buttons -->
      <div class="hidden justify-around lg:w-1/4 ml-10 lg:flex">
        <div class="flex items-center transition ease-in-out hover:scale-125">
          <span
            class="w-7 h-7 rounded-full text-center font-semibold text-white border border-white bg-brightRed -mr-2 -mt-8"
          >
            {{ itemsInCart.length }}
          </span>
          <router-link
            :to="{ name: 'checkout' }"
            :class="{ disabledLink: itemsInCart.length < 1 }"
            ><img src="img/shopping.svg" class="w-6 block" alt="shopping" />
          </router-link>
        </div>
        <img
          src="img/search.svg"
          class="transition delay-100 ease-in-out w-6 block hover:scale-125"
          alt="shopping"
        />
        <button
          v-if="isLogedIn"
          class="p-3 pt-2 px-4 border-2 text-white font-semibold rounded-lg border-brightCyan bg-brightCyan hover:bg-white hover:text-brightCyan"
          @click="logout"
        >
          Logout
        </button>
        <router-link
          v-if="!isLogedIn"
          :to="{ name: 'login' }"
          class="p-3 pt-2 px-4 border-2 text-white font-semibold rounded-lg border-brightCyan bg-brightCyan hover:bg-white hover:text-brightCyan"
        >
          Login
        </router-link>
        <router-link
          v-if="!isLogedIn"
          :to="{ name: 'login' }"
          class="p-3 pt-2 px-4 border-2 text-white font-semibold rounded-lg border-brightCyan bg-brightCyan hover:bg-white hover:text-brightCyan"
        >
          Register
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "NavBar",

  methods: {
    logout() {
      sessionStorage.setItem("user", "false");
      this.logOut();
    },
    ...mapActions("user", ["logOut"]),
  },
  computed: {
    isLogedIn() {
      return this.user.login === true ? true : false;
    },
    ...mapGetters("shoppingCart", ["itemsInCart"]),
    ...mapState("user", ["user"]),
  },
};
</script>

<style>
.disabledLink {
  pointer-events: none;
}
</style>
