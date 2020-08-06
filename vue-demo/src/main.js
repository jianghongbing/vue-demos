import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/reset.scss";
import "./scss/fonts.scss";
Vue.config.productionTip = false;

Vue.config.errorHandler = function (error, vm, info) {
  console.log(error, vm, info);
};


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
