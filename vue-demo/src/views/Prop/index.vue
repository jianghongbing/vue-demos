<template>
  <div class="component-prop">
    <Counter :count="10" incrementButtonText="add" decrementButtonText="subtract" />
    <br />
    <Counter :count="count" @increment="count++" @decrement="count--" />
    <Movie :name="movieItem.name" :director="movieItem.director" :year="movieItem.year" />
    <!-- 一次性绑定对象的所有属性 -->
    <Movie v-bind="movieItem" />
    <Movie name="小鱼儿的一天" />
  </div>
</template>

<script>
import Counter from '../../components/Counter';
import Movie from './Movie'
export default {
  name: 'vd-component-prop',
  components: {
    Counter,
    Movie,
  },
  data() {
    return {
      count: 10,
      movieItem: {
        name: '无间道',
        director: '刘伟强 麦兆辉',
        year: '2003',
      }
    }
  }
}
</script>

<style scoped>
.component-prop {
  padding: 15px;
}
</style>