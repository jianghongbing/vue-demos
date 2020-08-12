<template>
  <header class="navigation-bar" @click="$router.back()">
    <button v-show="canGoBack" class="iconfont">&#xe685;</button>
    <h3>{{title}}</h3>
  </header>
</template>

<script>
export default {
  name: 'vd-navigation-bar',
  props: {
    title: {
      type: String,
      default: 'Vue Demo',
    },
    canGoBack: {
      type: Boolean,
      default: false,
    }
  },
}
</script>

<style scoped lang='scss'>
.navigation-bar {
  position: fixed;
  text-align: center;
  background: white;
  border-bottom: 1px solid #eee;
  width: 100%;
  max-width: 640px;
  height: 44px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  button {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    background: transparent;
    padding: 5px;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: bold;
    &:active {
      opacity: 0.75;
    }
  }
  h3 {
    color: #2a975b;
    font-weight: bold;
    line-height: 44px;
  }
}
</style>