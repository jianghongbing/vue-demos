<template>
<div class="prop-sync-obj">
  <input type="text" placeholder="请输入用户名" :value="userName" @input="handleUserNameChange">
  <br>
  <input type="text" placeholder="请输入年龄" :value="age" @input="handleAgeChange">
</div>
</template>

<script>
  export default {
    name: 'prop-sync-obj',
    props: {
      userName: {
        type: String,
        default: ''
      },
      age: {
        type: [Number, String],
        default: 0
      }
    },
    methods: {
      handleUserNameChange(e) {
        this.$emit('update:userName', e.target.value)
      },
      handleAgeChange(e) {
        this.$emit('update:age', e.target.value)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>