import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecipeView from "../views/RecipeView.vue";
import CheckOutView from "../views/CheckOutView.vue";
import BillingView from "../views/BillingView.vue";
import LoginView from "../views/LoginView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: RecipeView,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: CheckOutView,
  },
  {
    path: "/billing",
    name: "billing",
    component: BillingView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
