<template>
  <div class="instance">
    <input type="text" class="instance-input" v-model="inputText" placeholder="请输入某些文字" />
    <p>{{inputText || '下面显示你即将输入的文字'}}</p>
    <PostError />
  </div>
</template>

<script>
import PostError from './PostError';
export default {
  name: 'vd-instance',
  components: {
    PostError,
  },
  data() {
    return {
      inputText: '',
    }
  },
  props: {
    name: {
      type: String,
      default: '',
    }
  },

  beforeCreate() {
    console.log('********************* befroeCreate ******************');
    console.log(this);
    console.log(this.$data, this.$props);
  },
  created() {
    console.log('********************* create ******************');
    console.log(this);
    console.log(this.$data, this.$props);
    console.log(this.$el);
  },
  beforeMount() {
    console.log('********************* beforeMount ******************');
    console.log(this);
    console.log(this.$el);
  },
  mounted() {
    console.log('********************* mounted ******************');
    console.log(this.$el);
  },
  beforeUpdate() {
    console.log('********************* befroeUpdate ******************');
    console.log(this);
    console.log(this.$data, this.$props);
  },
  updated() {
    console.log('********************* update ******************');
    console.log(this);
  },
  beforeDestroy() {
    console.log('********************* beforeDestroy ******************');
    console.log(this);
  },
  destroyed() {
    console.log('********************* destroyed ******************');
    console.log(this);
  },

  errorCaptured(error, vm, info) {
    console.log(error, vm, info);
  }

}
</script>

<style scoped lang='scss'>
$margin: 10px;
.instance {
  padding: 10px;
  &-input {
    border: 1px solid #eee;
    height: 30px;
    width: 200px;
    padding: 6px;
    display: block;
    margin: $margin auto 0;
  }
  p {
    margin-top: $margin;
    text-align: center;
  }
}
</style>