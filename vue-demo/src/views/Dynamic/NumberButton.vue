<template>
 <button id="dy-button" @click="clickedCount++">
   {{clickedCount}}
 </button>
</template>

<script>
export default {
 name: 'vd-button',
 data() {
   return {
     clickedCount: 0,
   }
 }
}
</script>

<style scoped lang='scss'>
 #dy-button {
   margin-top: 10px;
   background: orangered;
   padding: 8px;
   font-weight: bold;
   color: whitesmoke;
   border-radius: 5px;
   min-width: 100px;
   font-size: 30px;
   font-weight: bold;
   outline: none;
 }
</style>