<template>
  <div class="list-render">
    <ul>
      <h3>电影列表</h3>
      <li v-for="(item, index) in movieItems" :key="index">{{item.name}}</li>
    </ul>
    <ol>
      <h3>电影列表</h3>
      <li v-for="(item, index) in movieItems" :key="index">
        <ol class="inside-ul">
          <h4>{{item.name}}</h4>
          <li v-for="(value, key) in item.info" :key="value">{{key}}:{{value}}</li>
        </ol>
      </li>
    </ol>
    <span class="number" v-for="(number, index) in 10" :key="index">{{number}}</span>
  </div>
</template>

<script>
export default {
  name: 'vd-list-render',
  data() {
    return {
      movieItems: [
        {
          name: '无间道',
          info: {
            '导演': '刘伟强, 麦兆辉',
            '上映时间': '2002年',
          }
        },
        {
          name: '英雄本色',
          info: {
            '导演': '吴宇森',
            '上映时间': '1987',
          }
        },
        {
          name: '赌神',
          info: {
            '导演': '王晶',
            '上映时间': '1989',
          }
        }
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
.list-render {
  padding: 15px;
  text-align: center;
  ul {
    border: 1px solid #eee;
    margin-bottom: 20px;
    & > li {
      list-style-position: inside;
      list-style-type: decimal;
      text-align: left;
      padding: 5px 20px;
      font-size: 20px;
      font-weight: bolder;
      color: orange;
    }
  }
  .inside-ul {
    text-align: center;
    border: 2px solid pink;
    list-style-type: none;
    margin-bottom: 10px;
    color: #666;
    li {
      list-style-type: none;
      padding: 5px 20px;
      font-size: 15px;
      font-weight: bolder;
      text-align: left;
      color: orangered;
    }
  }
  .number {
    display: inline-block;
    margin-right: 5px;
    font-size: 15px;
    font-weight: bolder;
    color: green;
  }
}
</style>