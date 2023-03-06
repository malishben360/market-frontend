// categories.js
import { getCategories } from "@/services/CategoryService";

const state = {
  categories: [],
};

const getters = {
  allCategories: (state) => state.categories,
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
};

const actions = {
  fetchCategories({ commit }) {
    return getCategories()
      .then((response) => {
        commit("SET_CATEGORIES", response.data);
      })
      .catch((error) => console.log(error));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
