<template>
  <router-link class="link-item" :to="to"  tag="li">{{ title }}</router-link>
</template>

<script>
export default {
  name: 'vx-link-item',
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
</style>