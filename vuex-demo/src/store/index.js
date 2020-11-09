import { createStore, createLogger } from 'vuex';
import { INCREMENT_MUTATION, DECREMENT_MUTATION } from './mutation-type';
import todo from './modules/todo';
const isDebug = process.env.NODE_ENV !== 'production';


export default createStore({
  state: {
    count: 100,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      if (state.count <= 0) return;
      state.count--;
    },
    [INCREMENT_MUTATION](state) {
      state.count++;
    },
    [DECREMENT_MUTATION](state) {
      if (state.count <= 0) return;
      state.count--;
    },
    incrementNumber(state, { number }) {
      state.count += number;
    },
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit(INCREMENT_MUTATION);
      }, 1000);
    },
    incrementAction({ commit }, number=1) {
      commit('incrementNumber', {
        number,
      });
    },
  },
  modules: {
    todo,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },

  plugins: isDebug ? [createLogger()] : [],
});
