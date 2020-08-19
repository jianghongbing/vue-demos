<template>
  <div class="mixins">
    <p>mixined name is <span>{{name}}</span></p>
    <button @click="decrement">decrement</button>
    <span>{{count}}</span>
    <button @click="increment">increment</button>
    <br>
    <br>
    <button @click="$forceUpdate()">Force Update</button>
  </div>
</template>

<script>
import mixins from './mixins';
export default {
  name: 'vd-mixins',
  mixins: [mixins],
  data() {
    return {
      count: 10,
    }
  },
  methods: {
    decrement() {
      this.count += 2;
    }
  },
  created() {
    console.log(this);
    console.log('call created from component');
  },
  updated() {
    console.log('call updated from component');
  },
}
</script>

<style scoped lang='scss'>
.mixins {
  padding: 15px;
  text-align: center;
  button {
    background: orangered;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color: whitesmoke;
  }
  span {
    font-size: 25px;
    font-weight: bolder;
    margin: 10px;
    color: orange;
    vertical-align: middle;
  }
}
</style>