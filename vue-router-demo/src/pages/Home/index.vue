<template>
  <div class="home">
    <router-link to="/noparam" class="route-link" tag="div">
      <span>不带参数的路由</span>
      <CustomArrow />
    </router-link>
    <router-link to="/withparams/admin/123456" class="route-link" tag="div">
      <span>带有参数的路由</span>
      <CustomArrow />
    </router-link>
    <router-link to="/withparams/admin/123456?userId=001&foo=bar" class="route-link" tag="div">
      <span>带有参数和query字符串的路由</span>
      <CustomArrow />
    </router-link>
        <router-link :to="{name: 'withparams', params: {userName: 'root', password: 'P@ssW0rd'},query:{userId: '000', foo: 'bar'}}" class="route-link" tag="div">
      <span>以对象的形式传递参数和query字符串</span>
      <CustomArrow />
    </router-link>
  </div>
</template>

<script>
import IOSArrowForward from 'vue-ionicons/dist/ios-arrow-forward.vue'
const CustomArrow = () => <IOSArrowForward w="24px" h="24px" rootClass="arrow-container" />
export default {
  name: 'vrd-home',
  components: {
    CustomArrow,
  },
}
</script>

<style scoped>
.home {
  font-size: 16px;
  font-weight: bolder;
  color: #666;
}
.home > div {
  display: flex;
  height: 44px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #eee;
}
.arrow-container {
  width: 24px;
  height: 24px;
}
</style>