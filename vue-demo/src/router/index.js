import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Instance from "../views/Instance";
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


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      title: "Vue Demo",
    },
  },
  {
    path: "/instance",
    name: "instance",
    component: Instance,
    meta: {
      title: "Vue实例",
    },
  },
  {
    path: "/templateSynatx",
    name: "templateSynatx",
    component: TemplatSynatx,
    meta: {
      title: "模板语法",
    },
  },
  {
    path: "/directives",
    name: "directives",
    component: Directives,
    meta: {
      title: "指令",
    },
  },
  {
    path: "/computeProperty",
    name: "computeProperty",
    component: ComputedProperty,
    meta: {
      title: "计算属性和监听器",
    },
  },
  {
    path: "/stylebind",
    name: "stylebind",
    component: StyleBind,
    meta: {
      title: "class与style绑定",
    },
  },
  {
    path: "/conditionalRender",
    name: "conditionalRender",
    component: ConditionRender,
    meta: {
      title: "条件渲染",
    },
  },
  {
    path: "/listRender",
    name: "listRender",
    component: ListRender,
    meta: {
      title: "列表渲染",
    },
  },
  {
    path: "/eventHandle",
    name: "eventHandle",
    component: EventHandle,
    meta: {
      title: "事件处理",
    },
  },
  {
    path: "/formBind",
    name: "formBind",
    component: FormBind,
    meta: {
      title: "表单输入绑定",
    },
  },
  {
    path: '/componentBasic',
    name: 'componentBasic',
    component: ComponentBasic,
    meta: {
      title: '组件基础',
    }
  },
  {
    path: '/componentRegister',
    name: 'componentRegister',
    component: ComponentRegister,
    meta: {
      title: '组件注册',
    }
  },
  {
    path: '/prop',
    name: 'prop',
    component: Prop,
    meta: {
      title: '组件属性',
    }
  },
  {
    path: '/customEvent',
    name: 'customEvent',
    component: CustomEvent,
    meta: {
      title: '自定义事件',
    }
  }
];

const router = new VueRouter({
  routes,
});

router.afterEach((to) => {
  if (to.meta.title) {
    store.commit("setNavigationBarTitle", to.meta.title);
  }
});

export default router;
