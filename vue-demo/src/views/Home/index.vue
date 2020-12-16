<template>
  <div class="home">
    <ul class="link-list">
      <vd-link-item v-for="(item, index) in linkItems" :key="index" v-bind="item" />
    </ul>
  </div>
</template>

<script>
import LinkItem from '../../components/LinkItem.vue'
export default {
  name: "vd-home",
  components: {
    [LinkItem.name]: LinkItem,
  },
  computed: {
    linkItems() {
      return [
        {
          to: '/instance',
          title: 'Vue实例',
        },
        {
          to: '/templateSynatx',
          title: '模板语法',
        },
        {
          to: '/directives',
          title: '指令',
        },
        {
          to: '/computeProperty',
          title: '计算属性和监听器',
        },
        {
          to: '/styleBind',
          title: 'class与style绑定',
        },
        {
          to: '/conditionalRender',
          title: '条件渲染',
        },
        {
          to: '/listRender',
          title: '列表渲染',
        },
        {
          to: '/eventHandle',
          title: '事件处理',
        },
        {
          to: '/formBind',
          title: '表单输入绑定',
        },
        {
          to: '/componentBasic',
          title: '组件基础',
        },
        {
          to: '/componentRegister',
          title: '组件注册',
        },
        {
          to: '/prop',
          title: '组件属性',
        },
        {
          to: '/customEvent',
          title: '自定义事件',
        },
        {
          to: '/slot',
          title: '插槽',
        },
        {
          to: '/dynamic',
          title: '动态组件&异步组件',
        },
        {
          to: '/edge',
          title: '处理边界情况',
        },
        {
          to: '/mixins',
          title: '混入',
        },
        {
          to: '/customDirective',
          title: '自定义指令',
        },
        {
          to: '/render',
          title: 'render函数',
        },
        {
          to: '/jsx',
          title: 'JSX',
        },
        {
          to: '/functional-component',
          title: '函数式组件',
        },
        {
          to: '/filters',
          title: '过滤器',
        }
      ]
    },
  },
};
</script>

<style lang="scss">
</style>
