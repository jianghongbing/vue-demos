<template>
 <div class="inner">
   <p>内层组件</p>
   <span>{{count}}</span>
   <br>
   <button @click="increment">call inject method</button>
 </div>
</template>

<script>
export default {
 name: 'vd-inner',
 inject: ['count', 'incrementCount'],
 methods: {
   increment() {
     console.log(this.count);
     this.incrementCount();
   }
 },
}
</script>

<style scoped lang='scss'>
 .inner {
   border: 1px solid green;
   padding: 8px;
   span {
     font-size: 25px;
     font-weight: bolder;
     color: red;
   }
   button {
     background: orangered;
     color: whitesmoke;
     font-size: 18px;
     font-weight: bolder;
     padding: 8px;
     border-radius: 5px;
   }

 }
</style>