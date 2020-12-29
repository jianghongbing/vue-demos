import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/reset.scss';
import './scss/fonts.scss';
import './utils/registerBaseComponents';
import './directives';
import './filters';

// Vue.config.silent = process.env.NODE_ENV === 'development'
Vue.config.silent = true;
Vue.config.productionTip = true;
// Vue.config.devtools = false;

Vue.config.errorHandler = function(error, vm, info) {
  console.log(error, vm, info);
};

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log('warn message:' + msg);
  console.log(vm);
  console.log(trace);
};

//全局注册组件
Vue.component('vd-poem', {
  template:
    "<div style='border: 1px solid #eee; padding: 8px'><h3>山居秋暝</h3><h4>唐代：王维</h4><p>空山新雨后，天气晚来秋。</p><p>明月松间照，清泉石上流。</p><p>竹喧归浣女，莲动下渔舟。</p><p>随意春芳歇，王孙自可留。</p></div>",
});

new Vue({
  router,
  store,
  render: h => h(App),
  data: {
    id: 'amdin',
  },
  methods: {
    alertId() {
      alert(`id:${this.id}`);
    },
  },
}).$mount('#app');

console.log(Vue.version);
