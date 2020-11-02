<template>
<header class="vx-header">
  <span class="title">vuex-demo</span>
</header>
</template>

<script>
export default {
 name: 'vx-header',
}
</script>

<style scoped>
.vx-header {
  position: fixed;
  top: 0;
  left: 0;
  height: 44px;
  background: #fff;
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  border-bottom: 1px solid #eee;
}

.title {
  color: #42b983;
  font-size: 18px;
  font-weight: bolder;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>