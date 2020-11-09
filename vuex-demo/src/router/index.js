import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home'),
  },
  {
    path: '/count-demo-01',
    component: () =>
      import(/* webpackChunkName: "count-demo-01" */ '../views/count-demo-01'),
  },
  {
    path: '/count-demo-02',
    component: () =>
      import(/* webpackChunkName "count-demo-02" */ '../views/count-demo-02'),
  },
  {
    path: '/todo-demo-01',
    component: () =>
      import(/* webpackChunkName "todo-demo" */ '../views/todo-demo-01'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
