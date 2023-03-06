// order-history.js
const state = {
  orders: [],
};

const getters = {
  allOrders: (state) => state.orders,
};

const mutations = {
  ADD_ORDER(state, order) {
    state.orders.push(order);
  },
};

const actions = {
  checkout({ commit }, order) {
    commit("ADD_ORDER", order);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
