<template functional>
<div class="input-item">
  <span for="vd-input-item">{{props.title}}</span>
  <input type="text" :placeholder="props.placeholder" @input="listeners.input">
  <button @click="listeners.submit">ok</button>
</div>
</template>

<script>
export default {
 name: 'vd-input-item',
 props: {
   title: {
     type: String,
     default: '',
   },
   placeholder: {
     type: String,
     default: '',
   }
 }
}
</script>

<style scoped lang='scss'>
 .input-item {
   background: #fff;
   display: flex;
   align-items: center;
   margin-top: 10px;
   span {
     flex: none;
     margin-right: 10px;
   }
   button {
     flex: none;
     margin-left: 10px;
     background: #30d75c;
     color: white;
     font-size: 20px;
     font-weight: bolder;
     padding: 8px;
     border-radius: 4px;
   }
   input {
     flex: 1;
   }
 }
</style>