<template>
  <div class="style-bind">
    <div class="button-list">
      <h3>Click Button to Toggle Value</h3>
      <button @click="isRed=!isRed">isRed:{{isRed}}</button>
      <button @click="isBolder=!isBolder">isBolder:{{isBolder}}</button>
      <button @click="isLarge=!isLarge">isLarge:{{isLarge}}</button>
    </div>
    <div class="poem">
      <h1 class="red">山居秋暝</h1>
      <h2 class="italic" :class="nameColor">唐代：王维</h2>
      <p class="red bold">空山新雨后，天气晚来秋。</p>
      <p :class="['green', 'bolder', 'large']">明月松间照，清泉石上流。</p>
      <p :class="[isRed ? 'red' : '', 'line-through']">竹喧归浣女，莲动下渔舟。</p>
      <p :class="{'red': isRed, 'bolder': isBolder, 'large': isLarge}">随意春芳歇，王孙自可留。</p>
    </div>
    <div class="poem">
      <h1>山居秋暝</h1>
      <h2>唐代：王维</h2>
      <p :class="classObj1">空山新雨后，天气晚来秋。</p>
      <p :style="{'color': 'orange', 'fontStyle': 'italic', 'fontWeight': '900'}">明月松间照，清泉石上流。</p>
      <p :style="styleObj">竹喧归浣女，莲动下渔舟。</p>
      <p>随意春芳歇，王孙自可留。</p>
    </div>
    <Poem />
    <Poem class="component-class"/>
  </div>
</template>

<script>
import Poem from './TestCompoent';
export default {
  name: 'vd-style-bind',
  components: {
    Poem,
  },
  data() {
    return {
      nameColor: 'green',
      isRed: true,
      isBolder: false,
      isLarge: false,
      red: 'red',
      bolder: 'bolder',
      large: '30px',
    }
  },
  computed: {
    classObj1() {
      const { isRed, isBolder } = this;
      return {
        red: isRed,
        bolder: isBolder,
      }
    },
    styleObj() {
      const {red, bolder, large} = this;
      return {
        color: red,
        fontWeight: bolder,
        fontSize: large,
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.style-bind {
  padding: 15px;
  text-align: center;
  button {
    background: #2233ef;
    color: #fff;
    font-weight: bolder;
    border-radius: 5px;
    font-size: 20px;
    padding: 8px;
    display: block;
    margin: 10px auto;
    width: 300px;
  }
  .poem {
    border: 2px solid #eee;
    padding: 5px;
    margin-bottom: 15px;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
  .bolder {
    font-weight: bolder;
  }
  .bold {
    font-weight: bold;
  }
  .small {
    font-size: 12px;
  }
  .medium {
    font-size: 18px;
  }
  .large {
    font-size: 25px;
  }
  .line-through {
    text-decoration: line-through;
  }
  .italic {
    font-style: italic;
  }
  .component-class {
    border: 2px solid pink;
    font-weight: bold;
    padding: 5px;
  }
}
</style>