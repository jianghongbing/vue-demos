<template>
  <div class="dynamic-component">
    <button
      :class="showNumberButton ? 'button-selected': ''"
      @click="showNumberButton=true"
    >show number button</button>
    <button
      :class="!showNumberButton ? 'button-selected': ''"
      @click="showNumberButton=false"
    >show poem</button>
    <br />
    <component :is="selectedCompoentName"></component>
    <br />
    <keep-alive>
      <component :is="selectedCompoentName"></component>
    </keep-alive>
    <br />
    <Async />
  </div>
</template>

<script>
import NumberButton from './NumberButton';
import Poem from './Poem';
import Async from './async';
// import VDError from './Error';
// import Loading from './Loading';
export default {
  name: 'vd-dynamic-component',
  data() {
    return {
      showNumberButton: true,
    }
  },
  components: {
    poem: Poem,
    numberButton: NumberButton,
    Async
    // Async: () => ({
    //   component: import('./Async.vue'),
    //   loading: Loading,
    //   error: VDError,
    //   delay: 2000,
    //   timeout: 3000,
    // }),
  },
  computed: {
    selectedCompoentName() {
      return this.showNumberButton ? 'numberButton' : 'poem';
    }
  },

}
</script>

<style scoped lang='scss'>
.dynamic-component {
  padding: 15px;
  text-align: center;
  button {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  .button-selected {
    color: white;
    background: #2345ef;
  }
}
</style>