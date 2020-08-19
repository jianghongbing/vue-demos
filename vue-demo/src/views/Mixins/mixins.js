const mixins = {
  data() {
    return {
      count: 0, 
      name: 'xiaoming',
    }
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  },
  created() {
    console.log('call created from mixins');
  },
  beforeUpdate() {
    console.log('call befroeUpdate from mixins');
  },
  updated() {
    console.log('call updated from mixins');
  }
}

export default mixins; 