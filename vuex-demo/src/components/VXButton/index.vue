<template>
 <button><slot></slot></button>
</template>

<script>
export default {
 name: 'vx-button',
}
</script>

<style scoped>
 button {
  background: #42b983;
  color: #fff;
  font-size: 15px;
  font-weight: bolder;
  padding: 10px;
  min-width: 200px;
  border: none;
  border-radius: 10px;
  outline: none;
 }
</style>