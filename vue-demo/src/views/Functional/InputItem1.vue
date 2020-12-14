<script>
export default {
  name: 'vd-input-item-1',
  functional: true,
  render(h, { props, listeners }) {
    const { title, placeholder } = props;
    const { input, submit } = listeners;
    return (
      <div class="input-item-1">
        <span>{title}</span>
        <input placeholder={placeholder} onInput={input} />
        <button onClick={submit}>OK</button>
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.input-item-1 {
  background: #fff;
  display: flex;
  align-items: center;
  margin-top: 10px;
  span {
    flex: none;
    margin-right: 10px;
  }
  button {
    flex: none;
    margin-left: 10px;
    background: #30d75c;
    color: white;
    font-size: 20px;
    font-weight: bolder;
    padding: 8px;
    border-radius: 4px;
  }
  input {
    flex: 1;
  }
}
</style>
