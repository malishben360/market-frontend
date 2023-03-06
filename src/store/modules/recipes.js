// recipes.js
import { getRecipes } from "@/services/RecipeService";
const state = {
  recipes: [],
};

const getters = {
  allRecipes: (state) => state.recipes,
  getRecipeByCategory: (state) => (category) => {
    if (category === "recipes") return state.recipes;
    else return state.recipes.filter((recipe) => recipe.category === category);
  },
};

const mutations = {
  SET_RECIPES(state, recipes) {
    state.recipes = recipes;
  },
};

const actions = {
  fetchRecipes({ commit }) {
    getRecipes()
      .then((response) => {
        commit("SET_RECIPES", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
