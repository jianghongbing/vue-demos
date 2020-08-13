<template>
  <div class="custom-input">
    <label>{{title}}</label>
    <input :value="value" :placeholder="placeholder" @input="inputHandler" />
  </div>
</template>

<script>
export default {
  name: 'vd-custom-input',
  props: ['title', 'value', 'placeholder'],
  methods: {
    inputHandler(e) {
      this.$emit('input', e.target.value);
    }
  },
}
</script>

<style scoped lang='scss'>
.custom-input {
  padding: 5px;
  text-align: center;
  font-size: 16px;
  border: 1px solid orangered;
  border-radius: 5px;
  label {
    margin: 0 8px;
  }
  input {
    border: 2px solid #eee;
    padding: 6px;
  }
}
</style>