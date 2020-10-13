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
    <router-link
      to="/withparams/admin/123456?userId=001&foo=bar"
      class="route-link"
      tag="div"
    >
      <span>带有参数和query字符串的路由</span>
      <CustomArrow />
    </router-link>
    <router-link
      :to="{
        name: 'withparams',
        params: { userName: 'root', password: 'P@ssW0rd' },
        query: { userId: '000', foo: 'bar' },
      }"
      class="route-link"
      tag="div"
    >
      <span>以对象的形式传递参数和query字符串</span>
      <CustomArrow />
    </router-link>
    <router-link to="/notfound" class="route-link" tag="div">
      <span>404 NotFound</span>
      <CustomArrow />
    </router-link>
    <div class="route-link" @click="toNext">
      <span>通过代码实现路由跳转</span>
      <CustomArrow />
    </div>
    <router-link to="/nestroute" class="route-link" tag="div">
      <span>嵌套路由</span>
      <CustomArrow />
    </router-link>
    <router-link to="/redirect" class="route-link" tag="div">
      <span>重定向</span>
      <CustomArrow />
    </router-link>
    <router-link to="/alias" class="route-link" tag="div">
      <span>路由别名</span>
      <CustomArrow />
    </router-link>
    <router-link to="/namedview" class="route-link" tag="div">
      <span>命名视图</span>
      <CustomArrow />
    </router-link>
    <div class="route-link" @click="toComponentPropsPage">
      <span>路由组件传参</span>
      <CustomArrow />
    </div>
    <router-link to="/navigationguards" class="route-link" tag="div">
      <span>路由导航守卫</span>
      <CustomArrow />
    </router-link>
    <router-link to="/routelink" class="route-link" tag="div">
      <span>route-link API</span>
      <CustomArrow />
    </router-link>
    <router-link to="/routerview" class="route-link" tag="div">
      <span>router-view API</span>
      <CustomArrow />
    </router-link>
    <router-link to="/router" class="route-link" tag="div">
      <span>router API</span>
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
  methods: {
    toNext() {
      this.$router.push('/withparams/admin/123456?userId=001&foo=bar');
    },
    toComponentPropsPage() {
      this.$router.push({
        name: 'paramsToProps',
        params: {
          userId: '001',
          userName: 'admin',
        },
        query: {
          foo: 'bar',
        }
      })
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log('home beforeRouteLeave callback');
    next()
  }
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