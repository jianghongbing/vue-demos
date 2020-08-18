<template>
  <div class="outer">
    <p>外层组件</p>
    <button @click="count--">decrement</button>
    <span>{{count}}</span>
    <button @click="count++">increment</button>
    <br />
    <br />
    <slot name="bottom"></slot>
  </div>
</template>

<script>
export default {
  name: 'vd-outer',
  data() {
    return {
      count: 0,
    }
  },
  provide() {
    return {
      count: this.count,
      incrementCount: this.incrementCount,
    }
  },
  methods: {
    incrementCount() {
      this.count += 2;
    }
  },
}
</script>

<style scoped lang='scss'>
.outer {
  border: 2px solid pink;
  padding: 10px;
  button {
    color: white;
    background: #2234ed;
    padding: 8px;
    border-radius: 5px;
    font-weight: bolder;
  }
  span {
    color: orangered;
    font-size: 25px;
    font-weight: bolder;
    vertical-align: bottom;
    margin: 10px;
  }
}
</style>