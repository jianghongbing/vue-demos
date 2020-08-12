<template>
  <div id="app">
    <vd-navigation-bar :title="navigationBarTitle" :canGoBack="canGoBack" />
    <router-view class="root-view"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import VDNavigationBar from './components/NavigationBar.vue';
export default {
  name: 'vd-app',
  components: {
    [VDNavigationBar.name]: VDNavigationBar,
  },
  data() {
    return {
      canGoBack: false,
    }
  },
  computed: {
    ...mapState(['navigationBarTitle']),
  },
  mounted() {
    this.canGoBack = this.$route.path !== '/home';
  },
  updated() {
    this.canGoBack = this.$route.path !== '/home';
  }
}
</script>

<style lang="scss">
#app {
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
}
.root-view {
  margin-top: 44px;
}
</style>

