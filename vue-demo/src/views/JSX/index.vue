
<script>
import Counter from './Counter';
export default {
  name: 'vd-jsx',
  data() {
    return {
      count: 1,
    }
  },
  render(h) {
    const { count } = this;
    return (<div class="jsx">
      <span class="count">{count}</span>
      <button class="btn" onClick={this.buttonClickHandler}>Click Me</button>
      <Counter count={count} onIncrement={this.increment} onDecrement={this.decrement} onInput={this.input}/>
    </div>);
  },
  methods: {
    buttonClickHandler() {
      this.count++;
    },
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    input(e) {
      this.count = Number(e.target.value);
    }
  },
}
</script>

<style scoped lang='scss'>
.jsx {
  padding: 15px;
  text-align: center;
}
.count {
  font-size: 30px;
  font-weight: bolder;
  color: orangered;
}

.btn {
  font-size: 18px;
  font-weight: bolder;
  color: whitesmoke;
  background: #2cbb70;
  padding: 10px;
  display: block;
  margin: 10px auto;
  border-radius: 5px;
}
</style>