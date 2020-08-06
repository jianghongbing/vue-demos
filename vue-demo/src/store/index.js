import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationBarTitle: "",
  },
  mutations: {
    setNavigationBarTitle(state, title) {
      state.navigationBarTitle = title;
    },
  },
  actions: {},
  modules: {},
  plugins: [createLogger(), ],
});
