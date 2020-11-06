<template>
  <div class="count-demo-02">
    <span class="count">{{ count }}</span>
    <br />
    <span class="count">{{ doubleCount }}</span>
    <br />
    <span class="count">{{ $store.getters.doubleCount }}</span>
    <br />
    <VXButton class="button" @click="INCREMENT_MUTATION">increment</VXButton>
    <VXButton class="button" @click="DECREMENT_MUTATION">decrement</VXButton>
    <VXButton class="button" @click="incrementNumber({ number: 2 })">increment 2</VXButton>
    <VXButton class="button" @click="incrementAsync">increment async</VXButton>
    <VXButton class="button" @click="incrementNumber5(5)"
      >increment 5 by action</VXButton
    >
  </div>
</template>

<script>
import VXButton from '../../components/VXButton';
import {
  INCREMENT_MUTATION,
  DECREMENT_MUTATION,
} from '../../store/mutation-type';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
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
    ...mapMutations([INCREMENT_MUTATION, DECREMENT_MUTATION, 'incrementNumber']),
    // increment() {
    //   this.$store.commit(INCREMENT_MUTATION);
    // },
    // decrement() {
    //   this.$store.commit(DECREMENT_MUTATION);
    // },
    // incrementTwo() {
    //   this.$store.commit({
    //     type: 'incrementNumber',
    //     number: 2,
    //   })
    // },
    incrementAsync() {
      this.$store.dispatch('incrementAsync');
    },
    ...mapActions({
      incrementNumber5: 'incrementAction',
    })
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