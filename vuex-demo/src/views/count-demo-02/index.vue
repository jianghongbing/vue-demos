<template>
  <div class="count-demo-02">
    <span class="count">{{ count }}</span>
    <br />
    <span class="count">{{ doubleCount }}</span>
    <br />
    <span class="count">{{ $store.getters.doubleCount }}</span>
    <br />
    <VXButton class="button" @click="increment">increment</VXButton>
    <VXButton class="button" @click="decrement">decrement</VXButton>
    <VXButton class="button" @click="incrementTwo">decrement 2</VXButton>
  </div>
</template>

<script>
import VXButton from '../../components/VXButton';
import {
  INCREMENT_MUTATION,
  DECREMENT_MUTATION,
} from '../../store/mutation-type';
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'vx-count-demo-02',
  components: {
    VXButton,
  },
  computed: {
    // ...mapState({
    //   count: state => state.count
    // }),
    ...mapState(['count']),
    ...mapGetters(['doubleCount'])
  },
  methods: {
    increment() {
      this.$store.commit(INCREMENT_MUTATION);
    },
    decrement() {
      this.$store.commit(DECREMENT_MUTATION);
    },
    incrementTwo() {
      this.$store.commit({
        type: 'incrementNumber',
        number :2,
      })
    }
  },
}
</script>

<style scoped>
.count-demo-02 {
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