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
        }
      ]
    },
  },
};
</script>

<style lang="scss">
</style>
