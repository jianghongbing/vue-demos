<template>
  <div class="directives">
    <label for="user-name">
      用户名:
      <input type="text" placeholder="请输入用户名" v-model="userName" />
    </label>
    <br />
    <p>
      这是你输入的用户名:
      <span v-text="userName" />
    </p>
    <p>
      这是你输入的用户名:
      <span>{{userName}}</span>
    </p>
    <button v-on:click="showPinkCircle = !showPinkCircle">show pink circle:{{showPinkCircle}}</button>
    <div class="pink-circle" v-show="showPinkCircle"></div>
    <div class="pink-circle" v-if="showPinkCircle"></div>
    <button @click="age--" :disabled="age <=0 ">-</button>
    <span>你的年龄:{{age}}</span>
    <button @click="age++" :disabled="age>=150">+</button>
    <p v-if="age < 6" class="small">你还是个baby</p>
    <p v-else-if="age < 18" class="medium">你还是个少年</p>
    <p v-else class="big">你已经成年了</p>
    <p v-once>你的年龄:{{age}}</p>
    <p v-pre>你的年龄:{{age}}</p>
    <p v-cloak>你的年龄:{{age}}</p>
    <div class="outter">
      <div class="middle">
        <div class="inner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vd-directives',
  data() {
    return {
      userName: '',
      showPinkCircle: true,
      age: 10,
    }
  }
}
</script>

<style scoped lang='scss'>
.directives {
  padding: 10px;
  text-align: center;
  input {
    border: 1px solid red;
    border-radius: 5px;
    padding: 6px;
  }
  p {
    span {
      color: orangered;
      font-weight: bold;
      word-wrap: break-word;
      padding: 0 6px;
    }
  }
  button {
    padding: 8px;
    margin: 10px;
    color: #fff;
    background: #2233ee;
    border-radius: 5px;
    &:disabled {
      opacity: 0.65;
    }
  }
  div.pink-circle {
    width: 100px;
    height: 100px;
    background: pink;
    border-radius: 50%;
    margin: 0 auto 10px;
  }
  .small {
    font-size: 12px;
  }
  .medium {
    font-size: 15px;
  }
  .big {
    font-size: 18px;
  }
  [v-cloak] {
    color: red;
  }
  .outter {
    
  }
}
</style>