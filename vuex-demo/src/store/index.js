import { createStore, createLogger, Store } from 'vuex';
import { INCREMENT_MUTATION, DECREMENT_MUTATION } from './mutation-type';
import todo from './modules/todo';
import form from './modules/form';
const isDebug = process.env.NODE_ENV !== 'production';

const store = createStore({
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
    incrementAction({ commit }, number = 1) {
      commit('incrementNumber', {
        number,
      });
    },
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  modules: {
    todo,
    form,
  },
  plugins: isDebug ? [createLogger({
    collapsed: false,
  })] : [],
  // strict: isDebug,
  // devtools: isDebug,
  strict: true,
  devtools: false,
});

const unwatch = store.watch(function (state, getters) {
  console.log(state, getters);
  return state.count;
}, function (value, oldValue) {
    console.log(value, oldValue);
}, {
  
});

const unSubscribe = store.subscribe((mutation, state) => {
  console.log(mutation, state);
}, {
  prepend: true
})



export default store;
