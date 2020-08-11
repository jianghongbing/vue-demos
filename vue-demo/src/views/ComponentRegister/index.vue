<template>
  <div class="component-register">
    <BaseButton @click="count--">count--</BaseButton>
    <span>{{count}}</span>
    <BaseButton @click="count++">count++</BaseButton>
    <br>
    <br>
    <Counter :count="count" @increment="count+=2" @decrement="count-=2"/>
  </div>
</template>

<script>
import Counter from './Counter';
export default {
  name: 'vd-component-register',
  //局部注册组件
  components: {
    Counter,
  },
  data() {
    return {
      count: 0,
    }
  }
}
</script>

<style scoped lang='scss'>
.component-register {
  text-align: center;
  padding: 15px;
  span {
    color: orangered;
    font-size: 25px;
    font-weight: bolder;
    margin: 10px;
  }
}
</style>