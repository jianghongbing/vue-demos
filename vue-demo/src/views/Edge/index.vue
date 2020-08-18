<template>
  <div class="edge">
    <button @click="printRootData">打印根实例上的数据</button>
    <button @click="callRootMethod">调用根实例方法</button>
    <br />
    <input type="text" placeholder="请输入用户名" ref="userName" />
    <br />
    <button @click="focusUserNameInput">focus user name input</button>
    <br />
    <button @click="blurUserNameInput">blur user name input</button>
    <br />
    <ClickCountButton ref="button"></ClickCountButton>
    <br />
    <button @click="$refs.button.decrement(1)">decrease click count</button>
    <br />
    <Outer>
      <template #bottom>
        <Middle>
          <template #content>
            <Inner></Inner>
          </template>
        </Middle>
      </template>
    </Outer>
  </div>
</template>

<script>
import ClickCountButton from './ClickCountButton';
import Outer from './Outer';
import Middle from './Middle';
import Inner from './Inner';

export default {
  name: 'vd-edge',
  components: {
    ClickCountButton,
    Outer,
    Middle,
    Inner,
  },
  created() {
    // console.log(this.$root === this.$parent);
    console.log(this.$parent);
  },
  methods: {
    printRootData() {
      console.log(this.$root.id);
    },
    callRootMethod() {
      this.$root.alertId();
    },
    focusUserNameInput() {
      this.$refs.userName.focus();
    },
    blurUserNameInput() {
      this.$refs.userName.blur();
    }
  },
}
</script>

<style scoped lang='scss'>
.edge {
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
  input {
    outline: none;
    border: 1px solid #eee;
    padding: 6px;
    border-radius: 4px;
    min-width: 200px;
    margin: 10px;
    &:focus {
      border: 2px solid orange;
    }
  }
}
</style>