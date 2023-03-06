// shopping-cart.js
const cart = JSON.parse(sessionStorage.getItem("cart"));
const state = {
  items: cart ? cart : [],
};

const getters = {
  itemsInCart: (state) => state.items,
  totalPrice: (state) => {
    let total = state.items.reduce((pre, cur) => {
      pre += cur.price * cur.quantity;
      return pre;
    }, 0);
    return total;
  },
};

const mutations = {
  ADD_TO_CART(state, addItem) {
    for (let index = 0; index < state.items.length; index++) {
      if (state.items[index].id === addItem.id) return;
    }
    state.items.push(addItem);
    sessionStorage.setItem("cart", JSON.stringify(state.items));
  },
  UPDATE_ITEM_IN_CART(state, updatedItem) {
    state.items = state.items.filter((item) => {
      if (item.id === updatedItem.id) return updatedItem;
      else return item;
    });
    sessionStorage.setItem("cart", JSON.stringify(state.items));
  },
  REMOVE_FROM_CART(state, removeItem) {
    state.items = state.items.filter((item) => item.id !== removeItem.id);
    sessionStorage.setItem("cart", JSON.stringify(state.items));
  },
  CLEAR_CART(state) {
    state.items = [];
    sessionStorage.setItem("cart", JSON.stringify(state.items));
  },
};

const actions = {
  addItemToCart({ commit }, item) {
    commit("ADD_TO_CART", item);
  },
  editItemInCart({ commit }, updatedItem) {
    commit("UPDATE_ITEM_IN_CART", updatedItem);
  },
  removeItemFromCart({ commit }, item) {
    commit("REMOVE_FROM_CART", item);
  },
  clearShoppingCart({ commit }) {
    commit("CLEAR_CART");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
