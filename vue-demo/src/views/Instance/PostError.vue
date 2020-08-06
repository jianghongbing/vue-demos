<template>
 <button class="post-error" @click="postError">
   Click Me To Post An Error
 </button>
</template>

<script>
export default {
 name: 'vd-post-error',
 methods: {
   postError() {
     const error = new Error("这是一个组件中抛出的错误");
     throw error;
   }
 }
}
</script>

<style scoped lang='scss'>
 .post-error {
   display: block;
   background: #3355ee;
   color: #fff;
   font-size: 20px;
   padding: 8px;
   margin: 10px auto 0;
   border-radius: 5px;
 }
</style>