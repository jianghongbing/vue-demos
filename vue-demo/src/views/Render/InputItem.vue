<script>
export default {
  name: 'vd-input-item',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入',
    }
  },
  methods: {
    buttonClickHandler() {
      this.$emit('click');
    },
    inputHanlder(e) {
      this.$emit('input', e.target.value);
    }
  },
  render(createElement) {
    return createElement('div',
      {
        class: 'input-item',
        style: {
          padding: '8px',
          borderRadius: '5px',
        }
      },
      [
        createElement('span', this.title),
        createElement('input', {
          attrs: {
            placeholder: this.placeholder,
            value: this.text,
          },
          on: {
            input: this.inputHanlder,
          },
        }),
        createElement('button', {
          on: {
            click: this.buttonClickHandler,
          }
        }, this.$slots.default),
      ])
  },
}
</script>

<style scoped lang='scss'>
.input-item {
  border: 1px solid orangered;
  font-size: 16px;
  display: flex;
  align-items: center;
  span {
    flex: none;
    font-weight: bold;
  }
  input {
    flex: 1;
    margin: 0 5px;
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 6px;
    &:focus {
      border: 1px solid blueviolet;
    }
  }
  button {
    flex: none;
    padding: 8px;
    background: #2234ed;
    border-radius: 6px;
    color: #fff;
    font-weight: bold;
  }
}
</style>