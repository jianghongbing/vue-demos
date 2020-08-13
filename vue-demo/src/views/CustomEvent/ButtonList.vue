<template>
  <div class="button-list" v-show="buttonTitles && buttonTitles.length > 0">
    <button
      v-for="(item, index) in buttonTitles"
      :key="index"
      @click.stop="$emit('click', $event, index)"
    >{{item}}</button>
  </div>
</template>

<script>
export default {
  name: 'vd-button-list',
  props: {
    buttonTitles: {
      type: Array,
      default: [],
      require: true,
    }
  }
}
</script>

<style scoped lang='scss'>
.button-list {
  border: 2px solid pink;
  padding: 8px;
  border-radius: 5px;
  text-align: center;
  button {
    padding: 8px;
    border-radius: 5px;
    color: #eee;
    font-size: 25px;
    font-weight: bolder;
    background: #2244ee;
    margin: 0 10px;
  }
}
</style>