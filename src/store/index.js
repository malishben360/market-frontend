import { createStore } from "vuex";
import recipes from "./modules/recipes.js";
import categories from "./modules/categories.js";
import shoppingCart from "./modules/shopping-cart.js";
import orderHistory from "./modules/order-history.js";
import user from "./modules/user.js";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    recipes,
    categories,
    shoppingCart,
    orderHistory,
  },
});
