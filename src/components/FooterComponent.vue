<template>
  <footer class="w-full bg-veryLightGray py-20">
    <div class="flex container px-6 mx-auto flex-col-space-y-6">
      <!-- Logo Menus and Newsletter -->
      <div class="flex justify-between w-full">
        <!-- Logo -->
        <div class="flex flex-col space-y-8 w-1/3">
          <h2 class="text-4xl font-pacific text-brightCyan">9jaRecipe</h2>
          <p class="text-md pr-10 tracking-tight font-semibold">
            Happiness is homemade, and the kitchen is the center of any home.
            Get your hands on my favorite kitchen recipe!
          </p>
          <span class="flex space-x-6">
            <img src="img/facebook-icon.svg" class="h-6 w-6" alt="facebook" />
            <img src="img/tiktok-icon.svg" class="h-8 w-8" alt="tiktok" />
            <img src="img/instagram-icon.svg" class="h-6 w-6" alt="instagram" />
            <img src="img/twitter-icon.svg" class="h-6 w-6" alt="twitter" />
          </span>
        </div>
        <!-- Menus -->
        <div class="flex px-8 justify-between w-1/3">
          <!-- Menu 1-->
          <div class="flex flex-col space-y-2">
            <h2 class="text-xl font-bold pb-2">About</h2>
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >About Me</a
            >
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >Our News</a
            >
            <router-link
              :to="{ name: 'recipes' }"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
            >
              Recipes</router-link
            >
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >Video</a
            >
          </div>
          <!-- Menu 2 -->
          <div class="flex flex-col space-y-2">
            <h2 class="text-xl font-bold pb-2">Services</h2>
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >What We Do</a
            >
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >Our Blog</a
            >
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >Contacts</a
            >
            <a
              href="#"
              class="text-md font-normal tracking-tight hover:text-brightCyan"
              >Our Video</a
            >
          </div>
        </div>
        <!-- Newsletter -->
        <div class="flex flex-col px-8 space-y-6 w-1/3">
          <h2 class="text-xl font-bold tracking-tight">Join Our Newsletter</h2>
          <form action="">
            <div
              class="flex px-4 justify-between py-3 w-full bg-white rounded-lg"
            >
              <input
                type="text"
                class="italic focus:outline-none text-brihtGrayishCyan"
                placeholder="Your email address"
              />
              <button
                class="text-lg font-semibold border-2 border-brightCyan bg-brightCyan text-white hover:text-brightCyan hover:bg-white rounded-md px-4 py-1"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container mx-auto h-1 mt-10 border-2 border-brightCyan"></div>
    <!-- Copyright -->
    <div class="flex flex-col mx-auto items-center">
      <!-- Links -->
      <div class="flex mt-8 space-x-8">
        <a
          href=""
          class="text-lg tracking-tight font-semibold hover:text-brightCyan"
          >General</a
        >
        <span>|</span>
        <a
          href=""
          class="text-lg tracking-tight font-semibold hover:text-brightCyan"
          >Terms Of Use</a
        >
        <span>|</span>
        <a
          href=""
          class="text-lg tracking-tight font-semibold hover:text-brightCyan"
          >Privacy Policy</a
        >
        <span>|</span>
        <a
          href=""
          class="text-lg tracking-tight font-semibold hover:text-brightCyan"
          >Security Policy</a
        >
        <span>|</span>
        <a
          href=""
          class="text-lg tracking-tight font-semibold hover:text-brightCyan"
          >Careers</a
        >
        <span>|</span>
        <a
          href=""
          class="text-lg tracking-tight font-semibold hover:text-brightCyan"
          >Support</a
        >
      </div>
      <!-- Copy -->
      <p class="tracking-tight font-semibold pt-4">
        &copy; Copyright 2023 9jaRicipe. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style></style>
