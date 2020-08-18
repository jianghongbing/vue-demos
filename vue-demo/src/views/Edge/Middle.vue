<template>
 <div class="middle">
   <p>中间组件</p>
   <slot name="content"></slot>
 </div>
</template>

<script>
export default {
 name: 'vd-middle',
}
</script>

<style scoped lang='scss'>
 .middle {
   border: 2px solid salmon;
   padding: 5px;
 }
</style>