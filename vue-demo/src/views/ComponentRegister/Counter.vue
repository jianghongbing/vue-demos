<template>
  <div class="counter">
    <BaseButton class="counter-button" @click="$emit('increment')">increment</BaseButton>
    <span>{{count}}</span>
    <BaseButton class="counter-button" @click="$emit('decrement')">decrement</BaseButton>
  </div>
</template>

<script>
export default {
  name: 'vd-counter',
  props: {
    count: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style scoped lang='scss'>
.counter {
  padding: 10px;
  border: 2px solid pink;
  border-radius: 5px;
  .counter-button {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  span {
    display: block;
    color: orange;
    font-size: 25px;
    font-weight: bolder;
    margin: 8px auto;
  }
}
</style>