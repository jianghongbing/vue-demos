<script>
export default {
  name: 'vd-jsx-counter',
  props: {
    count: {
      type: Number,
      required: true,
    },
    // onIncrement: {
    //   type: Function,
    //   required: true,
    // },
    // onDecrement: {
    //   type: Function,
    //   required: true,
    // }

  },
  render(h) {
    const { count } = this;
    return (
      <div class="counter">
        <button onClick={()=>this.$emit('decrement')}>-</button>
        <input value={count} type='number' onInput={(e)=>this.$emit('input', e)}/>
        <button onClick={()=>this.$emit('increment')}>+</button>
      </div>
    )
  }
}
</script>

<style scoped lang='scss'>
.counter {
  height: 44px;
  display: flex;
  button {
    background: orangered;
    color: #fff;
    font-size: 20px;
    font-weight: bolder;
    padding: 8px;
    border-radius: 5px;
    flex: none;
  }

  input {
    margin: 0 10px;
    flex: 1;
    border: 1px solid #eee;
    border-radius: 6px;
    padding: 6px;
    color: #333;
    font-size: 20px;
  }

}
</style>