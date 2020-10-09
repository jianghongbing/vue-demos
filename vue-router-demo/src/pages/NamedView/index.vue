<template>
  <div class="named-view">
    <router-view name="top"></router-view>
    <div class="bottom">
      <router-view name="left"></router-view>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrd-named-view',
}
</script>

<style scoped>
.named-view {
  min-height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
}
.bottom {
  display: flex;
  flex: 1;
}
</style>