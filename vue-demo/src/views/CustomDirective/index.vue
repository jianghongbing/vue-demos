<template>
  <div class="custom-directive">
    <input type="text" placeholder="请输入用户名" v-focus />
    <br />
    <br />
    <button v-style:backgroundColor="'red'">Don't Click Me</button>
    <br />
    <br />
    <button v-style="{backgroundColor: 'green', color: '#ccc'}">Don't Click Me</button>
    <br />
    <br />
    <button v-style="styleObj" @click="isSelected=!isSelected">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'vd-custom-directive',
  directives: {
    style: {
      inserted(el, binding, vnode, oldVnode) {
        console.log(el, binding, vnode, oldVnode);
        const { arg, value } = binding;
        if (arg) {
          el.style[arg] = value;
        } else if (typeof value === 'object') {
          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              el.style[key] = value[key];
            }
          }
        }
      },
      componentUpdated(el, binding) {
        const { arg, value } = binding;
        if (arg) {
          el.style[arg] = value;
        } else if (typeof value === 'object') {
          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              el.style[key] = value[key];
            }
          }
        }
      },
      unbind(el, binding) {
        el.style.background = '';
      }
    }
  },
  data() {
    return {
      isSelected: false,
    }
  },
  computed: {
    styleObj() {
      return this.isSelected ? { backgroundColor: 'green', color: '#ccc', border: 'none' } : { backgroundColor: '#fff', color: '#000', border: '1px solid #2334ee', };
    }
  }
}
</script>

<style scoped lang='scss'>
.custom-directive {
  padding: 15px;
  text-align: center;
  button {
    background: orangered;
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    color: whitesmoke;
  }
  input {
    outline: none;
    border: 1px solid #eee;
    padding: 6px;
    border-radius: 4px;
    min-width: 200px;
    margin: 10px;
    &:focus {
      border: 2px solid orange;
    }
  }
}
</style>