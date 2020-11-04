import { createStore, createLogger } from "vuex";

export default createStore({
  state: {
    count: 100,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if (state.count <= 0) return;
      state.count--;
    },
    incrementNumber(state, {number}) {
      state.count += number;
    }
  },
  actions: {},
  modules: {},
  plugins: [
    createLogger(),
  ]
});
