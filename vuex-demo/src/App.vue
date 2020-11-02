<template>
  <div id="app">
    <VXHeader></VXHeader>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import VXHeader from './components/Header';
export default {
  name: 'vx-app',
  components: {
    VXHeader,
  }

}
</script>

<style scoped>
#app {
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}
.router-view {
  margin-top: 44px;
}
</style>
