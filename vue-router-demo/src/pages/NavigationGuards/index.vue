<template>
  <div class="navigation-guards">
    <button @click="buttonAClickHandler">可以正常跳转其他的路由的导航</button>
    <button @click="buttonBClickHandler">阻止跳转到其他的路由的导航</button>
    <button @click="buttonCClickHandler">导航过程中抛出错误的导航</button>
    <button @click="buttonDClickHandler">重定向到其他路由的导航</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'vrd-navigation-guards',
  methods: {
    buttonAClickHandler() {
      this.$router.push('/navigationguards/a');
    },
    buttonBClickHandler() {
      this.$router.push('/navigationguards/b');
    },
    buttonCClickHandler() {
      this.$router.push('/navigationguards/c');
    },
    buttonDClickHandler() {
      this.$router.push('/navigationguards/e');
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter callback');
    //此时组件实例并没有创建, 因此不能通过this来表示当前实例, 此时的this为undefined
    // console.log(this);
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate callback');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave callback');
    next();
  }
}
</script>

<style scoped>
.navigation-guards {
  padding: 15px;
}
button {
  padding: 10px;
  display: block;
  /* min-width: 200px; */
  width: 100%;
  margin: 10px auto;
  background: #2cbb70;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border-style: none;
  outline: none;
}
</style>