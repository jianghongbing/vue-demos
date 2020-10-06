import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/Home'),
  },
  {
    path: '/noparam',
    component: () => import('../pages/NoParam'),
  },
  {
    path: '/withparams/:userName/:password',
    name: 'withparams',
    component: () => import('../pages/WithParams'),
  },
  {
    path: '*',
    component: () => import('../pages/404'),
  }
];

const router = new VueRouter({
  routes,
  // base: '/vr',
  mode: 'hash',
});

export default router;