import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/reset.scss";
import "./scss/fonts.scss";
import "./utils/registerBaseComponents";
Vue.config.productionTip = false;

Vue.config.errorHandler = function(error, vm, info) {
  console.log(error, vm, info);
};

//全局注册组件
Vue.component("vd-poem", {
  template: "<div style='border: 1px solid #eee; padding: 8px'><h3>山居秋暝</h3><h4>唐代：王维</h4><p>空山新雨后，天气晚来秋。</p><p>明月松间照，清泉石上流。</p><p>竹喧归浣女，莲动下渔舟。</p><p>随意春芳歇，王孙自可留。</p></div>"
});



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
