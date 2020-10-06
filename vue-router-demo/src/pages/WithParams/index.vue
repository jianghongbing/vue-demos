<template>
<div class="with-params">获取到的参数:{{JSON.stringify($route.params)}}, 获取到的查询字符串:{{JSON.stringify($route.query)}}</div>
</template>

<script>
export default {
  name: 'vrd-with-params',
}
</script>

<style scoped>
.with-params {
  padding: 15px;
  text-align: center;
}
</style>