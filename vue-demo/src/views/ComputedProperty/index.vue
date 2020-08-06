<template>
  <div class="compute-property">
    <button class="big" @click="count--">减</button>
    <span class="big">{{count}}</span>
    <button class="big" @click="count++">加</button>
    <p>
      3*count =
      <span class="big">{{3 * count}}</span>
    </p>
    <p>
      3*count =
      <span class="big">{{countMultiplyThree()}}</span>
    </p>
    <p>
      3*count =
      <span class="big">{{multiplyCountByThree}}</span>
    </p>
    <div class="item">
      <p>修改numberA的值</p>
      <button class="big" @click="numberA--">减</button>
      <span class="big">{{numberA}}</span>
      <button class="big" @click="numberA++">加</button>
    </div>
    <span class="big">+</span>
    <div class="item">
      <p>观察或修改numberB的值</p>
      <button class="big" @click="numberB--">减</button>
      <span class="big">{{numberB}}</span>
      <button class="big" @click="numberB++">加</button>
    </div>
    <span class="big">等于</span>
    <div class="item">
      <p>观察或修改sum的值</p>
      <button class="big" @click="sum--">减</button>
      <span class="big">{{sum}}</span>
      <button class="big" @click="sum++">加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vd-compute-property',
  data() {
    return {
      count: 0,
      numberA: 0,
      numberB: 0,
    }
  },
  methods: {
    countMultiplyThree() {
      return this.count * 3;
    }
  },
  computed: {
    multiplyCountByThree() {
      return this.count * 3;
    },
    sum: {
      get() {
        return this.numberA + this.numberB;
      },
      set(newValue) {
        this.numberB = newValue - this.numberA
      }
    },
  },
  watch: {
    count(value) {
      alert(`count:${value}`);
    }
  }
}
</script>

<style scoped lang='scss'>
.compute-property {
  $big: 25px;
  $bolder: bolder;
  font-size: 15px;
  color: #666;
  font-weight: bold;
  text-align: center;
  padding: 15px;
  button {
    padding: 8px;
    border-radius: 5px;
    background: #2244ee;
    color: white;
    margin: 5px 10px;
    width: 50px;
  }
  .big {
    font-size: $big;
    font-weight: $bolder;
  }
  span.big {
    color: orangered;
    font-size: 30px;
    display: inline-block;
  }
  .item {
    border: 2px solid #eee;
    font-size: 20px;
  }
}
</style>