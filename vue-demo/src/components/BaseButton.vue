<template>
 <button class="base-button" @click="$emit('click')">
   <slot></slot>
 </button>
</template>

<script>
export default {
 name: 'vd-base-button',

}
</script>

<style scoped lang='scss'>
 .base-button {
   background: #2333ed;
   padding: 8px;
   color: #eee;
   font-weight: bold;
   font-size: 16px;
   border-radius: 6px;
 }
</style>