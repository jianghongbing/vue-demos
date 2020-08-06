<template>
  <div class="conditional-render">
    <div class="item pink" v-if="show"></div>
    <div class="item green" v-show="show"></div>
    <button @click="show=!show">Click to Show Or Hidden Div</button>
    <button @click="showUserInfo=!showUserInfo">Click to Show Or Hidden User Info</button>
    <template v-if="showUserInfo">
      <p>name is {{user.name}}</p>
      <p>age is {{user.age}}</p>
    </template>
    <template v-if="loginType==='userName'">
      <label>userName:</label>
      <input type="text" placeholder="请输入用户名" />
    </template>
    <template v-else>
      <label>phone:</label>
      <input type="text" placeholder="请输入手机号" />
    </template>
    <br />
    <button @click="loginType = loginType==='userName' ? 'phone' : 'userName'">change login type</button>
    <br />
    <template v-if="loginType==='userName'">
      <label>userName:</label>
      <input type="text" placeholder="请输入用户名" key="userName" />
    </template>
    <template v-else>
      <label>phone:</label>
      <input type="text" placeholder="请输入手机号" key="phone" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'vd-conditional-render',
  data() {
    return {
      show: false,
      showUserInfo: true,
      user: {
        name: 'jiangxiaoyu',
        age: 10,
      },
      loginType: 'userName',
    }
  }
}
</script>

<style scoped lang='scss'>
.conditional-render {
  padding: 15px;
  text-align: center;
  .item {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-left: 10px;
  }
  .pink {
    background: pink;
  }
  .green {
    background: green;
  }
  button {
    margin-top: 10px;
    background: #216fe4;
    color: #fff;
    padding: 8px;
    border-radius: 5px;
    font-weight: bolder;
  }
  input {
    border: 1px solid #eee;
    padding: 5px;
  }
}
</style>