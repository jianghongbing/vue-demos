<template>
  <div class="filters">
    <div class="input-item">
      <p class="title">首字母转换成大写</p>
      <input type="text" placeholder="请输入字母" v-model="text1" />
      <p class="converted-text">{{ text1 | capitalize }}</p>
    </div>
    <div class="input-item">
      <p class="title">所有字母转换为大写</p>
      <input type="text" placeholder="请输入字母" v-model="text2" />
      <p class="converted-text">{{ text2 | toUpperCase }}</p>
    </div>
    <div class="input-item">
      <p class="title">所有字母转换为大写并且进行反转</p>
      <input type="text" placeholder="请输入字母" v-model="text3" />
      <p class="converted-text">{{ text3 | toUpperCase | reverse}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vd-filters',
  data() {
    return {
      text1: '',
      text2: '',
      text3: '',
    };
  },
  filters: {
    toUpperCase(value) {
      if (typeof value !== 'string') return;
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped lang="scss">
.filters {
  padding: 15px;
  .input-item {
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 10px;
    .title {
      color: orangered;
      font-weight: bolder;
      font-size: 18px;
    }
    input {
      padding: 6px;
      border: 1px solid #ddd;
      border-radius: 5px;
      margin: 8px 0;
    }
    .converted-text {
      font-size: 14px;
    }
  }
}
</style>
