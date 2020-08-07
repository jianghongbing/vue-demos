<template>
  <div class="component-basic">
    <Counter />
    <Counter />
    <vd-poem />
  </div>
</template>

<script>
import Counter from './Counter';
export default {
  name: 'vd-component-basic',
  components: {
    //  [Counter.name]: Counter,
    // Poem: Vue.component('vd-poem'),
    Counter,
  },
}
</script>

<style scoped lang='scss'>
.component-basic {
  padding: 15px;
  text-align: center;
}
</style>