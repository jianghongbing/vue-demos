<template>
  <header class="vx-header">
    <IosArrowBackIcon v-if="$route.fullPath !== '/home'" w="30px" h="30px" rootClass="back-arrow" @click="goBack"/>
    <span class="title">vuex-demo</span>
  </header>
</template>

<script>
import IosArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue';
export default {
  name: 'vx-header',
  components: {
    IosArrowBackIcon,
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
}
</script>

<style scoped>
.vx-header {
  position: fixed;
  top: 0;
  left: 50%;
  height: 44px;
  background: #fff;
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  transform: translate(-50%);
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

.back-arrow {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
}
</style>