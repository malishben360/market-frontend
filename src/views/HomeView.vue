<template>
  <!-- Hero Section -->
  <section id="hero" class="w-full mt-2 mb-12 bg-brightCyan">
    <!-- Flex Container -->
    <div class="container px-6 mx-auto flex items-center justify-between">
      <!-- Heading -->
      <div
        class="flex flex-col space-y-6 mx-auto lg:mx-0 lg:space-x-0 lg:w-2/5"
      >
        <!-- Amazing Recipe-->
        <div
          class="flex space-x-4 justify-center pt-8 lg:pt-0 lg:justify-start"
        >
          <h4
            class="hidden tex-sm tracking-tightest font-semibold text-white lg:block"
          >
            |
          </h4>
          <h4 class="tex-sm tracking-tighter font-semibold text-white">
            AMAZING RECIPE FROM 9JARECIPE
          </h4>
        </div>
        <!-- Never Forget-->
        <h1
          class="text-5xl md:text-6xl tracking-wide text-white text-center lg:text-left font-bold"
        >
          Never Forget a <br class="hidden" />
          Recipe!
        </h1>
        <!-- Paragraph -->
        <p class="text-white text-center lg:text-left text-xl font-light">
          Happiness is homemade, and the kitchen is the center of <br />
          any home. Get your hands on my favorite kitchen recipe!
        </p>
        <!-- Button -->
        <div class="p-8 lg:p-0 flex justify-center lg:justify-start">
          <router-link
            :to="{ name: 'recipes' }"
            class="p-4 pt-3 px-12 rounded-lg font-bold text-brightCyan bg-white border-2 border-white hover:bg-veryDarkCyan hover:border-veryDarkCyan hover:text-white"
          >
            View Recipe</router-link
          >
        </div>
      </div>
      <!-- Image -->
      <div class="hidden lg:flex justify-center mt-14 w-3/5">
        <img
          src="img/hero-pie.png"
          class="h-4/5 w-4/5 -mb-36 -mr-6"
          alt="hero-pie"
        />
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="block px-4 container mx-auto mb-12">
    <div
      class="flex justify-start pl-2 items-center lg:w-3/5 h-32 bg-veryLightGray"
    >
      <!-- Item 1-->
      <div
        class="flex border-r-2 border-y-veryDarkCyan space-x-2 items-center pl-2 pr-4 w-1/3 h-24"
      >
        <!-- Icon -->
        <div class="w-1/6">
          <img src="img/free-delivery.svg" class="w-full" alt="free delivery" />
        </div>
        <!-- Text -->
        <div class="flex flex-col space-y-3 pl-4 w-5/6">
          <h3 class="md:text-lg font-bold text-left">Free Delivery</h3>
          <p class="text-sm font-light">
            Free shipping around <br />
            the world for all orders
          </p>
        </div>
      </div>
      <!-- Item 2-->
      <div
        class="flex border-r-2 border-y-veryDarkCyan space-x-2 items-center pl-2 pr-4 w-1/3 h-24"
      >
        <!-- Icon -->
        <div class="w-1/6">
          <img src="img/safe-payment.svg" class="w-full" alt="safe payment" />
        </div>
        <!-- Text -->
        <div class="flex flex-col space-y-3 pl-4 w-5/6">
          <h3 class="md:text-lg font-bold text-left">Safe Payment</h3>
          <p class="text-sm font-light">
            With our payment gateway,<br />
            your information is safe!
          </p>
        </div>
      </div>
      <!-- Item 3-->
      <div class="flex space-x-2 items-center pl-2 pr-4 w-1/3 h-24">
        <!-- Icon -->
        <div class="w-1/6">
          <img
            src="img/friendly-service.svg"
            class="w-full"
            alt="friendly service"
          />
        </div>
        <!-- Text -->
        <div class="flex flex-col space-y-3 pl-4 w-5/6">
          <h3 class="md:text-lg font-bold text-left">Friendly Services</h3>
          <p class="text-sm font-light">
            Empowering all people<br />
            to be plant people
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
