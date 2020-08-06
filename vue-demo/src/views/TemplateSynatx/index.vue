<template>
  <div class="template-synatx">
    <button @click="count--" v-bind:disabled="decreaseButtonDisabled">-</button>
    <span>{{count}}</span>
    <button @click="count++" v-bind:disabled="increaseButtonDisabled">+</button>
    <br />
    <p>
      count * 4 =
      <span>{{count * 4}}</span>
    </p>
    <p>{{count % 5 === 0 ? 'count 是 5 的倍数' : 'count 不是 5 的倍数'}}</p>
    <div class="raw-html">{{rawHTML}}</div>
    <div class="raw-html" v-html="rawHTML"></div>
  </div>
</template>

<script>
export default {
  name: 'vd-template-synatx',
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    rawHTML() {
      return "\
        <ul>\
        <li>无间道</li>\
        <li>英雄本色</li>\
        <li>喋血双雄</li>\
      </ul>\
    "
    },
    decreaseButtonDisabled() {
      return this.count <= 0;
    },
    increaseButtonDisabled() {
      return this.count >= 10
    }
  }
}
</script>

<style scoped lang='scss'>
.template-synatx {
  padding: 20px;
  button {
    background: #1d40ee;
    border-radius: 5px;
    padding: 15px;
    font-size: 30px;
    color: white;
    font-weight: bold;
  }
  button:disabled {
    opacity: 0.75;
  }

  span {
    color: orange;
    font-size: 50px;
    font-weight: bold;
    margin: 0 20px;
  }
  .raw-html {
    margin: 10px 10px;
    border: 2px solid pink;
  }
}
</style>