<template>
 <BaseButton @click="incrementCount">{{count || 'Click Me'}}</BaseButton>
</template>

<script>
export default {
 name: 'vd-record-number-button',
 props:{
   count: {
     type: Number,
     default: 0,
   }
 },
 methods: {
   incrementCount() {
     const count = this.count + 1; 
     this.$emit('update:count', count);
   }
 }
}
</script>

<style scoped lang='scss'>
 
</style>