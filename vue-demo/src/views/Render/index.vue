<template>
  <div class="render">
    <Title :level="1" class="red">标题一</Title>
    <Title :level="2">标题二</Title>
    <InputItem title="用户名" placeholder="请输入用户名" :text="userName" @input="userNameChangeHandler" @click="clickHandler">Submit</InputItem>
  </div>
</template>

<script>
import Title from './Title'
import InputItem from './InputItem'
export default {
  name: 'vd-render',
  components: {
    Title,
    InputItem,
  },
  data() {
    return {
      userName: 'admin',
    }
  },
  methods: {
    userNameChangeHandler(value) {
      this.userName = value;
    },
    clickHandler() {
      alert('clicked button');
    }
  },
}
</script>

<style scoped lang='scss'>
.render {
  padding: 15px;
  text-align: center;
  .red {
    color: red;
  }
}
</style>