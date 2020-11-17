<template>
  <ul class="vx-home">
    <VXLinkItem v-for="(item, index) in linkItems" :key="index" v-bind="item"/>
  </ul>
</template>

<script>
import VXLinkItem from '../../components/LinkItem';
export default {
  name: 'vx-home',
  components: {
    VXLinkItem,
  },
  data() {
    return {
      linkItems: [
        {
          to: '/count-demo-01',
          title: 'count-demo-01',
        },
        {
          to: '/count-demo-02',
          title: 'count-demo-02',
        },
        {
          to: '/todo-demo-01',
          title: 'todo-demo-01',
        },
        {
          to: '/todo-demo-02',
          title: 'todo-demo-02',
        },
        {
          to: '/form-handler',
          title: '表单处理',
        }
      ]
    }
  }
}
</script>
<style scoped>
</style>