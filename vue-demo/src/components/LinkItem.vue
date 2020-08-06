<template>
  <li class="link-item">
    <router-link :to="to">{{title}}</router-link>
    <span class="iconfont">&#xe687;</span>
  </li>
</template>

<script>
export default {
  name: 'vd-link-item',
  props: {
    title: {
      type: String,
      require: true,
    },
    to: {
      type: String,
      require: true,
    }
  }
}
</script>

<style lang='scss'>
.link-item {
  height: 44px;
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  font-size: 20px;
  font-weight: bold;
  color: #666;
  display: flex;
  justify-content: space-between;
  line-height: 44px;
  a {
    text-decoration: none;
    flex: 1;
    color: #666;
  }
}
</style>