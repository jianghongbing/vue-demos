<template>
  <div class="count-demo-01">
    <span class="count">{{ $store.state.count }}</span>
    <VXButton class="button" @click="increment">increment</VXButton>
    <VXButton class="button" @click="decrement">decrement</VXButton>
    <VXButton class="button" @click="incrementTwo">decrement 2</VXButton>
  </div>
</template>

<script>
import VXButton from '../../components/VXButton';

export default {
  name: 'vx-count-demo-01',
  components: {
    VXButton,
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
    incrementTwo() {
      this.$store.commit('incrementNumber', {
        number: 2,
      });
    }
  },
}
</script>

<style scoped>
.count-demo-01 {
  padding: 15px;
  text-align: center;
}
.count {
  font-size: 30px;
  font-weight: bolder;
  color: #42b983;
}

.button {
  display: block;
  margin: 20px auto;
}
</style>