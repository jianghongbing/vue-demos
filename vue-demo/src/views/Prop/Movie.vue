<template>
 <div class="movie">
   <p>{{name}}</p>
   <p>导演:{{director}}</p>
   <p>上映时间:{{year}}</p>
 </div>
</template>

<script>
export default {
 name: 'vd-movie',
 props: {
   name: {
     type: String,
     reqiure: true,
   },
   director: {
     type: String,
     default: '佚名',
   },
   year: {
     type: String,
     default: '未知',
   }
 }
}
</script>

<style scoped lang='scss'>
 .movie {
   border: 2px solid rebeccapurple;
   margin-top: 10px;
   padding: 8px;
   border-radius: 5px;
   line-height: 20px;
 }
</style>