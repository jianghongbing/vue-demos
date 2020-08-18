<template>
 <button @click="count++">
   {{count || 'Click Me'}}
 </button>
</template>

<script>
export default {
 name: 'vd-click-count-button',
 data() {
   return {
     count: 0,
   }
 },
 methods: {
   decrement(number) {
     if(number <= 0) return;
     if(this.count < number) return;
     this.count -= number;
   }
 },
}
</script>

<style scoped lang='scss'>
button {
  background: #2234ee !important;
  font-size: 25px !important;
  font-weight: bolder !important;
}
</style>