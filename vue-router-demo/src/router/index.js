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
  }
];

const router = new VueRouter({
  routes,
  // base: '/vr',
  mode: 'hash',
});

export default router;
