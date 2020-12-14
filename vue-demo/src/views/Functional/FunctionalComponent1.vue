<template functional>
  <div class="functional-1" v-bind="data.attrs">
    <h3 :class="data.attrs.color" @click="listeners.titleClick"><slot></slot></h3>
    <h3>{{ props.name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'vd-functional-1',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.functional-1 {
  text-align: center;
  margin: 10px;
  border: 1px solid #eee;
  padding: 8px;
  h3 {
    margin-top: 20px;
    font-weight: bolder;
  }

  .title-orange {
    color: orange;
  }
  .title-blue {
    color: blue;
  }
}
</style>
