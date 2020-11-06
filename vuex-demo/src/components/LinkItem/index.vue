<template>
  <router-link class="link-item" :to="to" tag="li">
    <span class="title">{{title}}</span>
    <IosArrowForwardIcon w="24px" h="24px" class="icon"/>
  </router-link>
</template>

<script>
import IosArrowForwardIcon from 'vue-ionicons/dist/ios-arrow-forward.vue';

export default {
  name: 'vx-link-item',
  components: {
    IosArrowForwardIcon, 
  },
  props: {
    to: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  },
}
</script>

<style scoped>
.link-item {
  height: 44px;
  width: 100%;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
}
.icon {
  width: 24px;
  height: 24px;
}

.title {
  font-size: 15px;
  font-weight: bolder;
}
</style>