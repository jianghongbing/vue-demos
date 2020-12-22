import Vue from 'vue';
import store from '../store';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Instance from '../views/Instance';
import TemplatSynatx from '../views/TemplateSynatx';
import Directives from '../views/Directives';
import ComputedProperty from '../views/ComputedProperty';
import StyleBind from '../views/StyleBind';
import ConditionRender from '../views/ConditionalRender';
import ListRender from '../views/ListRender';
import EventHandle from '../views/EventHandle';
import FormBind from '../views/FormBind';
import ComponentBasic from '../views/ComponentBasic';
import ComponentRegister from '../views/ComponentRegister';
import Prop from '../views/Prop';
import CustomEvent from '../views/CustomEvent';
import Slot from '../views/Slot';
// import Dynamic from '../views/Dynamic';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: 'Vue Demo',
    },
  },
  {
    path: '/instance',
    name: 'instance',
    component: Instance,
    meta: {
      title: 'Vue实例',
    },
  },
  {
    path: '/templateSynatx',
    name: 'templateSynatx',
    component: TemplatSynatx,
    meta: {
      title: '模板语法',
    },
  },
  {
    path: '/directives',
    name: 'directives',
    component: Directives,
    meta: {
      title: '指令',
    },
  },
  {
    path: '/computeProperty',
    name: 'computeProperty',
    component: ComputedProperty,
    meta: {
      title: '计算属性和监听器',
    },
  },
  {
    path: '/stylebind',
    name: 'stylebind',
    component: StyleBind,
    meta: {
      title: 'class与style绑定',
    },
  },
  {
    path: '/conditionalRender',
    name: 'conditionalRender',
    component: ConditionRender,
    meta: {
      title: '条件渲染',
    },
  },
  {
    path: '/listRender',
    name: 'listRender',
    component: ListRender,
    meta: {
      title: '列表渲染',
    },
  },
  {
    path: '/eventHandle',
    name: 'eventHandle',
    component: EventHandle,
    meta: {
      title: '事件处理',
    },
  },
  {
    path: '/formBind',
    name: 'formBind',
    component: FormBind,
    meta: {
      title: '表单输入绑定',
    },
  },
  {
    path: '/componentBasic',
    name: 'componentBasic',
    component: ComponentBasic,
    meta: {
      title: '组件基础',
    },
  },
  {
    path: '/componentRegister',
    name: 'componentRegister',
    component: ComponentRegister,
    meta: {
      title: '组件注册',
    },
  },
  {
    path: '/prop',
    name: 'prop',
    component: Prop,
    meta: {
      title: '组件属性',
    },
  },
  {
    path: '/customEvent',
    name: 'customEvent',
    component: CustomEvent,
    meta: {
      title: '自定义事件',
    },
  },
  {
    path: '/slot',
    name: 'slot',
    component: Slot,
    meta: {
      title: '插槽',
    },
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    // component: Dynamic,
    //以异步的形式加载组件
    component: () => import('../views/Dynamic'),
    meta: {
      title: '动态组件&异步组件',
    },
  },
  {
    path: '/edge',
    name: 'edge',
    component: () => import('../views/Edge'),
    meta: {
      title: '处理边界情况',
    },
  },
  {
    path: '/mixins',
    name: 'mixins',
    component: () => import('../views/Mixins'),
    meta: {
      title: '混入',
    },
  },
  {
    path: '/customDirective',
    name: 'customDirective',
    component: () => import('../views/CustomDirective'),
    meta: {
      title: '自定义指令',
    },
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('../views/Render'),
    meta: {
      title: '渲染函数',
    },
  },
  {
    path: '/jsx',
    component: () => import('../views/JSX'),
    meta: {
      title: 'JSX',
    },
  },
  {
    path: '/functional-component',
    component: () => import('../views/Functional'),
    meta: {
      title: '函数式组件',
    }
  }, 
  {
    path: '/filters',
    component: () => import('../views/Filters'),
    meta: {
      title: '过滤器',
    }
  },
  {
    path: '/transition',
    component: () => import('../views/Transition'),
    meta: {
      title: '过渡'
    }
  },
];

const router = new VueRouter({
  routes,
});

router.afterEach((to) => {
  if (to.meta.title) {
    store.commit('setNavigationBarTitle', to.meta.title);
  }
});

export default router;
