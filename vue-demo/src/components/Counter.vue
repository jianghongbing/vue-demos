<template>
  <div class="counter">
    <BaseButton @click="$emit('decrement')">{{decrementButtonText}}</BaseButton>
    <span>{{count}}</span>
    <BaseButton @click="$emit('increment')">{{incrementButtonText}}</BaseButton>
  </div>
</template>

<script>
export default {
  name: 'vd-counter',
  props: {
    count: Number,
    incrementButtonText: {
      type: String,
      default: 'increment',
    },
    decrementButtonText: {
      type: String,
      default: 'decrement',
    },
  },
  updated() {
    // if(this.count)
    console.log('update')
  },
}
</script>

<style scoped lang='scss'>
.counter {
  border: 2px solid plum;
  padding: 8px;
  text-align: center;
  span {
    color: orange;
    font-size: 25px;
    font-weight: bolder;
    margin: 0 15px;
    vertical-align: bottom;
  }
}
</style>