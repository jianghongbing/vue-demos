<template>
  <div class="transition">
    <button @click="show = !show">
      show
    </button>
    <br />
    <transition>
      <div class="item" v-if="show"></div>
    </transition>
    <transition name="translate">
      <div class="item" v-if="show"></div>
    </transition>
    <br />
    <transition
      name="circle"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div class="item circle" v-show="show"></div>
    </transition>
    <br />
    <transition name="scale" mode="out-in">
      <div class="item green" v-if="show" key="green"></div>
      <div class="item blue" v-else key="blue"></div>
    </transition>
    <br />
    <transition name="fade" mode="out-in">
      <component :is="displayedComponentName"></component>
    </transition>
    <br />
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in cards" :key="item">
        <span>{{ item }}</span>
      </li>
    </transition-group>
    <button @click="shuffle">
      shuffle
    </button>
  </div>
</template>

<script>
import ldshuffle from 'lodash/shuffle';
export default {
  name: 'vd-transition',
  components: {
    orange: {
      template: '<div class="item orange"></div>',
    },
    black: {
      template: '<div class="item black"></div>',
    },
  },
  data() {
    return {
      show: false,
      cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    };
  },
  computed: {
    displayedComponentName() {
      return this.show ? 'orange' : 'black';
    },
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter');
    },
    enter(el, done) {
      setTimeout(done, 2000);
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled() {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
    },
    leave(el, done) {
      console.log('leave');
      setTimeout(done, 2000);
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled() {
      console.log('leaveCancelled');
    },
    shuffle() {
      this.cards = ldshuffle(this.cards);
    },
  },
};
</script>

<style scoped lang="scss">
.transition {
  padding: 15px;
  position: relative;
  button {
    color: white;
    background: #2cbb70;
    font-weight: 15px;
    padding: 6px;
    border-radius: 4px;
  }
  .item {
    margin-top: 10px;
    background: orangered;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: inline-block;
    margin-left: 10px;
  }
  .circle {
    position: absolute;
    top: 100px;
    left: 0;
  }

  .v-enter {
    background: black;
    transform: scale(0);
  }

  .v-leave {
    background: black;
    transform: scale(2);
  }

  .v-leave-to {
    background: blue;
    transform: scale(0);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 2s;
  }

  .translate-enter {
    background: black;
    transform: translateY(-200px);
  }
  .translate-leave-to {
    background: blue;
    transform: translateY(1000px);
  }
  .translate-enter-active,
  .translate-leave-active {
    transition: all 2s;
  }
  .circle-enter-active {
    animation: circle 2s;
  }
  .circle-leave-active {
    animation: circle 2s reverse;
  }

  @keyframes circle {
    0% {
      transform: translate(0);
    }
    25% {
      transform: translate(100px, 0);
    }
    50% {
      transform: translate(100px, 100px);
    }
    75% {
      transform: translate(0, 100px);
    }
    100% {
      transform: translate(0);
    }
  }
  .green {
    background: green;
  }
  .blue {
    background: blue;
  }
  .scale-enter,
  .scale-leave-to {
    transform: scale(0.01);
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: transform 2s;
  }
  .orange {
    background: orange;
  }
  .black {
    background: black;
  }

  .fade-enter,
  .fade-leave-to {
    background: transparent;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: background 2s;
  }
  ul {
    border: 1px solid #eee;
    padding: 8px;
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    justify-items: center;
  }
  li {
    background: black;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 16px;
    font-weight: bolder;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
  .flip-list-move {
    transition: transform 1s;
  }
}
</style>
