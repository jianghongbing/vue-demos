<template>
  <div class="route"></div>
</template>

<script>
export default {
  name: 'vrd-route',
  props: {
    foo: String,
  },
  created() {
    console.log(this.foo);
    console.log(this.$route.params);
    console.log(this.$route.query);
    console.log(this.$route.hash);
    console.log(this.$route.fullPath);
    console.log(this.$route.matched);
  }
}
</script>

<style lang='scss'>
</style>