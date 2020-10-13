<template>
  <div class="route-link">
    <router-link to="a" active-class="active-a">子路由a</router-link>
    <router-link to="b" active-class="active-b" exact-active-class="exact-active-b">子路由b</router-link>
    <div class="child-route-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vrd-route-link',
}
</script>

<style scoped>
.child-route-container {
  padding: 10px;
  border: 3px solid #2CBB70;
}

.active-a {
  color: royalblue;
  font-weight: bolder;
}

.active-b {
  color: orangered;
  font-weight: bolder;
  text-decoration: none;
}

.exact-active-b {
  color: green;
}

</style>