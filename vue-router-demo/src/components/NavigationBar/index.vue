<template>
  <header class="navigation-bar">
    <div class="arrow-container" @click="goBack">
      <IosArrowBackIcon
        rootClass="arrow"
        w="30px"
        h="30px"
        v-show="showBackArrow"
      />
    </div>
    <span class="title">vue-router-demo</span>
  </header>
</template>

<script>
import IosArrowBackIcon from 'vue-ionicons/dist/ios-arrow-back.vue'

export default {
  name: 'vr-navigation-bar',
  components: {
    IosArrowBackIcon,
  },
  computed: {
    showBackArrow() {
      return !(this.$route.fullPath === '/home' || this.$route.fullPath === '/');
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
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
  font-size: 24px;
  font-weight: bolder;
  line-height: 44px;
}

.arrow-container {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}
.arrow {
  width: 30px;
  height: 30px;
}
</style>