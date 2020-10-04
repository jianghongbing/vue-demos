<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar';
export default {
  name: 'App',
  components: {
    NavigationBar,
  }
}
</script>

<style>
#app {
  min-height: calc(100vh - 44px);
  min-width: 320px;
  max-width: 640px;
  margin: 44px auto 0;
}
</style>
