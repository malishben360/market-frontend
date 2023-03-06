import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vue3GoogleLogin from "vue3-google-login";
import "./index.css";
import "tw-elements";

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId:
    "106807869001-r22fkmphuddmm4qlb3rh4906ctahu2g9.apps.googleusercontent.com",
});

app.use(store).use(router).mount("#app");
