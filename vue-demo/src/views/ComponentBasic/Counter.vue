<template>
 <div class="vd-counter">
   <button @click="count--">count--</button>
   <span>{{count}}</span>
   <button @click="count++">count++</button>
 </div>
</template>

<script>
export default {
 name: 'vd-counter',
 data() {
   return {
     count: 0,
   }
 }
}
</script>

<style scoped lang='scss'>
 .vd-counter {
   padding: 8px;
   margin: 10px auto;
   border: 1px solid #eee;
   button {
     font-size: 18px; 
     color: #fff;
     background: #1145ed;
     padding: 10px;
     font-weight: bolder;
     border-radius: 5px;
   }
   span {
     color: orangered;
     font-size: 25px;
     font-weight: bolder;
     margin: 0 20px ;
   }
 }
</style>