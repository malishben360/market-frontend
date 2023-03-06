<template>
  <div class="container flex mx-auto my-14 h-110">
    <div
      class="flex flex-col px-6 space-y-4 w-2/3 lg:w-1/2 h-full mx-auto rounded-lg bg-veryLightGray"
    >
      <div class="flex items-center justify-center pt-6">
        <img src="img/login.svg" alt="login" class="w-14 h-14" />
      </div>
      <div class="border-gray border"></div>
      <h2 class="text-xl text-gray text-center font-bold">Sign In</h2>
      <form action="">
        <div class="flex flex-col px-6 space-y-4">
          <div class="flex items-center pl-2 bg-white rounded-md">
            <span class="bg-white h-10 w-10 flex items-center justify-center">
              <svg
                class="h-6 w-6 text-gray"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              class="rounded-md py-2 w-full focus:outline-none text-gray"
              placeholder="Enter your username"
            />
          </div>
          <div class="flex pl-2 rounded-md bg-white items-center">
            <span class="bg-white h-10 w-10 flex items-center justify-center">
              <svg
                class="h-5 w-5 text-gray"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <input
              type="password"
              class="rounded-md border-gray-400 py-2 w-full focus:outline-none text-gray"
              placeholder="Enter your password"
            />
          </div>
          <div class="flex items-center space-x-5">
            <input
              type="checkbox"
              name="logedin"
              id="logedin"
              class="w-5 h-5"
            />
            <p class="text-gray">Remember me</p>
          </div>
          <div class="">
            <button
              class="w-full px-8 py-2 text-xl rounded-md text-white bg-brightCyan hover:text-brightCyan hover:bg-white"
            >
              Log In
            </button>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-full border border-gray"></div>
            <span>OR</span>
            <div class="w-full border border-gray"></div>
          </div>
        </div>
      </form>
      <div class="flex flex-col px-6 space-y-4">
        <button
          class="flex items-center pl-2 py-2 border text-gray rounded-md hover:bg-white hover:text-brightCyan hover:border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="#000"
          >
            <path
              d="M16.46 5.79l.3.01a5.6 5.6 0 0 1 4.38 2.38c-.1.07-2.62 1.53-2.59 4.57.04 3.63 3.19 4.84 3.22 4.86-.02.08-.5 1.72-1.66 3.41-1 1.46-2.04 2.92-3.67 2.95-1.6.03-2.13-.96-3.96-.96-1.84 0-2.42.93-3.94.99-1.57.06-2.78-1.58-3.78-3.04-2.07-2.98-3.64-8.42-1.53-12.1a5.87 5.87 0 0 1 4.97-3c1.55-.03 3.01 1.04 3.96 1.04.95 0 2.73-1.29 4.6-1.1zM16.78 0a5.3 5.3 0 0 1-1.25 3.83 4.46 4.46 0 0 1-3.56 1.7 5.03 5.03 0 0 1 1.27-3.71A5.38 5.38 0 0 1 16.78 0z"
            />
          </svg>
          <p class="text-md text-center w-full font-bold">Sign In With Apple</p>
        </button>
        <GoogleLogin :callback="callback" popup-type="TOKEN">
          <button
            class="flex w-full pl-2 py-2 border rounded-md text-gray hover:bg-white hover:text-brightCyan hover:border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              viewBox="0 0 48 48"
            >
              <defs>
                <path
                  id="a"
                  d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                />
              </defs>
              <clipPath id="b">
                <use xlink:href="#a" overflow="visible" />
              </clipPath>
              <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
              <path
                clip-path="url(#b)"
                fill="#EA4335"
                d="M0 11l17 13 7-6.1L48 14V0H0z"
              />
              <path
                clip-path="url(#b)"
                fill="#34A853"
                d="M0 37l30-23 7.9 1L48 0v48H0z"
              />
              <path
                clip-path="url(#b)"
                fill="#4285F4"
                d="M48 48L17 24l-4-3 35-10z"
              />
            </svg>
            <p class="text-md font-bold text-center w-full">
              Sign In With Google
            </p>
          </button>
        </GoogleLogin>
      </div>
      <router-link
        :to="{ name: 'login' }"
        class="pl-6 py-6 text-gray hover:text-brightCyan"
        >Register here</router-link
      >
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "LoginView",
  methods: {
    callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      sessionStorage.setItem("user", "true");
      this.logIn({ access_token: response.access_token, login: true });
      if (this.$route.query.next) {
        const next = this.$route.query.next;
        this.$route.query.next = undefined;
        this.$router.replace({ name: next });
      } else {
        this.$router.go(-1);
      }
    },
    ...mapActions("user", ["logIn"]),
  },
});
</script>

<style></style>
