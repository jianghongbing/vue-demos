import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
  },
  {
    path: '/count-demo-01',
    component: () =>
      import(/* webpackChunkName: "count-demo-01" */ '../views/count-demo-01'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
