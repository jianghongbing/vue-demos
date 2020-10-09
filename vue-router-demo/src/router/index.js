import VueRouter from 'vue-router';
// import NamedViewTop from '../pages/NamedView/Top.vue';
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
    path: '/nestroute',
    component: () => import('../pages/NestRoute'),
    children: [
      {
        path: 'a',
        component: () => import('../pages/NestRoute/A.vue'),
      },
      {
        path: 'b',
        component: () => import('../pages/NestRoute/B.vue'),
      },
      {
        path: '',
        redirect: 'a',
        component: () => import('../pages/NestRoute/A.vue'),
      },
    ],
  },
  {
    path: '/redirect',
    redirect: '/noparam',
    alias: '/alias',
  },
  {
    path: '/namedview',
    component: () => import('../pages/NamedView'),
    children: [
      {
        path: '',
        components: {
          default: () => import('../pages/NamedView/Main.vue'),
          top: () => import('../pages/NamedView/Top.vue'),
          left: () => import('../pages/NamedView/Left.vue'),
        },
      },
    ],
  },
  {
    path: '/paramstoprops/:userId/:userName',
    component: () => import('../pages/ParamsToProps'),
    name: 'paramsToProps',
    // props: true,
    // props: {
    //   userId: '002',
    //   userName: 'jiangxiaoyu',
    // }
    props: (route) => ({
      ...route.params, ...route.query, extra: {
        nickName: 'xiaoyuer',
        address: 'xxxx',
    }}),
  },
  {
    path: '*',
    component: () => import('../pages/404'),
  },
];

const router = new VueRouter({
  routes,
  // base: '/vr',
  mode: 'hash',
});

export default router;
