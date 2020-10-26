<template>
  <div class="router">
    <button @click="pushButtonHandler">push</button>
    <button @click="replaceButtonHandler">replace</button>
    <button @click="goButtonHandler">go</button>
    <button @click="forwardButtonHandler">forward</button>
    <button @click="backButtonHandler">back</button>
    <div class="children">
      下面是匹配到的子路由组件
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrd-router',
  created() {
    console.log(this.$router);
    console.log(this.$router.app);
    console.log(this.$router.mode);
    console.log(this.$router.currentRoute);
    console.log(this.$router.getMatchedComponents())
  },
  methods: {
    pushButtonHandler() {
      // console.log(this.$router.currentRoute);
      const path = this.$router.currentRoute.path;
      if (path === '/router' || path === '/router/a') {
        this.$router.push('/router/b', function () { console.log('导航到B了') });
      } else if (path === '/router/b') {
        this.$router.push({
          path: 'c'
        }, function () {
          console.log('导航到C了');
        })
      } else {
        this.$router.push({
          path: 'a',
        }, function () {
          console.log('导航到A了');
        })
      }
    },
    replaceButtonHandler() {
      const path = this.$router.currentRoute.path;
      if (path !== '/router/d') {
        this.$router.replace({
          path: 'd',
        })
      } else {
        this.$router.replace('/router/a');
      }

    },
    goButtonHandler() {
      this.$router.go(-1);
    },
    forwardButtonHandler() {
      this.$router.forward();
    },
    backButtonHandler() {
      this.$router.back();
    }
  },
}
</script>

<style scoped>
.router {
  padding: 10px;
}
button {
  display: block;
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  background: #2cbb70;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 8px;
}
.children {
  margin-top: 10px;
  border: 1px solid orangered;
  padding: 8px;
  min-height: 300px;
}

.a {
  background: red;
}
.b {
  background: green;
}
.c {
  background: blue;
}
.d {
  background: orange;
}
</style>