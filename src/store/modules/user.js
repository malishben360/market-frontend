// user.js
const state = {
  user: {
    access_token: "",
    login: sessionStorage.getItem("user") === "true" ? true : false,
  },
};

const getters = {
  getUser: (state) => {
    return state.user;
  },
};
const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  RESET_USER(state) {
    const user = sessionStorage.getItem("user");
    state.user = {
      access_token: "",
      login: user === "true" ? true : false,
    };
  },
};

const actions = {
  logIn({ commit }, user) {
    commit("SET_USER", user);
  },
  logOut({ commit }) {
    commit("RESET_USER");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
