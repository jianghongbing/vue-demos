<template>
<div class="prop-sync">
  <button @click="handleIncrease">increase</button>
  <button @click="handleDecrease">decrease</button>
  <p class="count">{{count}}</p>
  <input class="message" :value="message" @input="handleInput($event.target.value)"></input>
</div>
</template>

<script>
  export default {
    name: 'prop-sync',
    props: {
      count: {
        type: Number,
         default: 0
      },
      message: {
        type: String,
        default: ''
      }
    },
    methods: {
      handleIncrease() {
        const count = this.count + 1;
        this.$emit('update:count', count)
      },
      handleDecrease() {
        const count = this.count - 1
        this.$emit('update:count', count)
      },
      handleInput(value) {
        this.$emit('update:message', value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.prop-sync {
  button {
    padding: 8px;
    font-size: 16px;
    background: blue;
    border-radius: 8px;
    color: white;
    margin-right: 10px;
  }
  border: 1px solid #999;
}
</style>