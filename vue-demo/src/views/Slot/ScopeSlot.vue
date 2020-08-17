<template>
  <div class="scope-slot">
    <slot :info="info"></slot>
  </div>
</template>

<script>
export default {
  name: 'vd-scope-slot',
  props: {
    info: {
      type: Object,
      default: {},
    }
  }
}
</script>

<style scoped lang='scss'>
.scope-slot {
  padding: 8px;
  border: 3px solid pink;
  border-radius: 5px;
  margin-top: 10px;
}
</style>