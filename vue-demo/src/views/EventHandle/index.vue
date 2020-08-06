<template>
  <div class="event-handle">
    <span class="count">{{count}}</span>
    <button v-on:click="count++">count+1</button>
    <button @click="decrease">count-1</button>
    <button @click="increase(2)">count+2</button>
    <div class="red" @click="redDivHandle">
      <div class="green" @click="greenDivHandle">
        <div class="blue" @click="blueDivHandle">click me</div>
      </div>
    </div>
    <div class="red" @click="redDivHandle">
      <div class="green" @click="greenDivHandle">
        <div class="blue" @click.stop="blueDivHandle">click me</div>
      </div>
    </div>
    <a href="https://www.apple.com">这个链接会跳转</a>
    <br>
    <a href="https://www.apple.com" @click.prevent>这个链接不会跳转</a>
  </div>
</template>

<script>
export default {
  name: 'vd-event-handle',
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrease(e) {
      console.log(e);
      this.count--;
    },
    increase(number) {
      this.count += number;
    },
    redDivHandle() {
      alert("red div clicked");
    },
    greenDivHandle() {
      alert('green div clicked');
    },
    blueDivHandle() {
      alert('blue div clicked');
    },
  },

}
</script>

<style scoped lang='scss'>
.event-handle {
  text-align: center;
  font-size: 18px;
  padding: 15px;
  .count {
    color: orange;
    font-size: 25px;
    font-weight: bolder;
  }
  button {
    display: block;
    width: 200px;
    margin: 10px auto 0;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    background: #285dce;
  }
  .red {
    margin-top: 20px;
    width: 150px;
    height: 150px;
    background: red;
  }
  .green {
    width: 120px;
    height: 120px;
    background: green;
  }
  .blue {
    width: 80px;
    height: 80px;
    background: blue;
    color: #fff;
  }
}
</style>