<template>
  <div class="custom-input-1">
    <label>{{title}}</label>
    <input :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'vd-custom-input-1',
  props: ['title', 'value', 'placeholder'],
  model: {
    props: 'value',
    event: 'input',
  },
}
</script>

<style scoped lang='scss'>
.custom-input-1 {
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