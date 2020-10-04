<template>
  <header class="navigation-bar">
    <span class="title">vue-router-demo</span>
  </header>
</template>

<script>
export default {
  name: 'vr-navigation-bar',
}
</script>

<style scoped>
.navigation-bar {
  position: fixed;
  height: 44px;
  width: 100%;
  background-color: #fff;
  color: #18aa20;
  border-bottom: 1px solid #eee;
  top: 0;
  left: 50%;
  min-width: 320px;
  max-width: 640px;
  transform: translateX(-50%);
  text-align: center;
}
.title {
  font-size: 20px;
  font-weight: bolder;
  line-height: 44px;
}
</style>