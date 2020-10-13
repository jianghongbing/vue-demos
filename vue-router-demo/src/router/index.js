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
      ...route.params,
      ...route.query,
      extra: {
        nickName: 'xiaoyuer',
        address: 'xxxx',
      },
    }),
  },
  {
    path: '/navigationguards',
    component: () => import('../pages/NavigationGuards'),
    beforeEnter: (to, from, next) => {
      console.log('route beforeEnter callback');
      next();
    },
    children: [
      {
        path: 'a',
        component: () => import('../pages/NavigationGuards/ChildA.vue'),
      },
      {
        path: 'b',
        component: () => import('../pages/NavigationGuards/ChildB.vue'),
        beforeEnter: (to, from, next) => {
          next(false);
        },
      },
      {
        path: 'c',
        component: () => import('../pages/NavigationGuards/ChildC.vue'),
        beforeEnter: (to, from, next) => {
          const error = new Error("Don't allow navigate to C");
          next(error);
        },
      },
      {
        path: 'd',
        component: () => import('../pages/NavigationGuards/ChildD.vue'),
      },
      {
        path: 'e',
        beforeEnter: (to, from, next) => {
          next('d');
        },
      },
      {
        path: '',
        redirect: 'a',
      },
    ],
  },
  {
    path: '/routelink',
    component: () => import('../pages/RouteLink'),
    children: [
      {
        path: 'a',
        component: () => import('../pages/RouteLink/A.vue'),
      },
      {
        path: 'b',
        component: () => import('../pages/RouteLink/B.vue'),
      },
      {
        path: '',
        redirect: 'a',
      }
    ],
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

router.onError((error) => {
  alert(error.message);
});

router.beforeEach((to, from, next) => {
  console.log('router beforeEach callback');
  next();
});

router.beforeResolve((to, from, next) => {
  console.log('router beforeResolve callback');
  next();
});
router.afterEach(() => {
  console.log('router afterEach callback');
});
export default router;
