<template>
  <div class="component-prop">
    <Counter :count="10" incrementButtonText="add" decrementButtonText="subtract" />
    <br />
    <Counter :count="count" @increment="count++" @decrement="count--" />
    <Movie :name="movieItem.name" :director="movieItem.director" :year="movieItem.year" />
    <!-- 一次性绑定对象的所有属性 -->
    <Movie v-bind="movieItem" />
    <Movie name="小鱼儿的一天" />
    <input type="text" placeholder="请输入" v-model="obj.message">
    <PropSync :count.sync="count" :message="obj.message" v-on:update:message="obj.message = $event"/>
    <p>{{userInfo}}</p>
    <PropSyncObj v-bind.sync="userInfo"></PropSyncObj>
  </div>
</template>

<script>
import Counter from '../../components/Counter';
import Movie from './Movie'
import PropSync from './PropSync'
import PropSyncObj from './PropSyncObj'
export default {
  name: 'vd-component-prop',
  components: {
    Counter,
    Movie,
    PropSync,
    PropSyncObj
  },
  data() {
    return {
      count: 10,
      movieItem: {
        name: '无间道',
        director: '刘伟强 麦兆辉',
        year: '2003',
      },
      obj: {
        message: ''
      },
      userInfo: {
        userName: '江小鱼',
        age: 10
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