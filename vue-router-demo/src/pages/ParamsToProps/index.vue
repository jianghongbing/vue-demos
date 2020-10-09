<template>
  <div class="params-to-props">
    {{
      `路由params:${JSON.stringify($route.params)}, query:${JSON.stringify(
        $route.query
      )}`
    }}
    <br />
    <br />
    {{ `通过路由props设置映射到组件的数据:userName: ${userName}, userId: ${userId}, foo:${foo},extra: ${JSON.stringify(extra)}`}}
  </div>
</template>

<script>
export default {
  name: 'vrd-params-to-props',
  props: {
    userId: String,
    userName: String,
    foo: String,
    extra: {
      type: Object,
      defaut: {},
    }
  },
}
</script>

<style scoped>
.params-to-props {
}
</style>