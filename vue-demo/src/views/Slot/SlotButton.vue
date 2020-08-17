<template>
  <button>
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  name: 'vd-slot-button',
}
</script>

<style scoped lang='scss'>
button {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  background: #2233ee;
  padding: 10px;
  border: none;
  border-radius: 8px;
}
</style>