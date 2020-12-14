<template>
  <div class="functional-component">
    <!-- <FunctionalComponent1 :title="'函数式组件'" :name="'functional'" :color="'title-orange'" @titleClick="titleClickHandler">函数式组件</FunctionalComponent1> -->
    <!-- <InputItem title="用户名:" placeholder="请输入用户名"></InputItem> -->
    <vd-input-item
      v-for="(item, index) in inputItems"
      v-bind="item"
      :key="index"
      @input="itemInputHanlder($event, index)"
      @submit="itemClickHandler(index)"
    ></vd-input-item>
    <vd-input-item-1 title="昵称" placeholder="请输入昵称" @input="nickNameChangeHandler" @submit="submitHandler"></vd-input-item-1>
  </div>
</template>

<script>
// import FunctionalComponent1 from './FunctionalComponent1';
import InputItem from './InputItem';
import InputItem1 from './InputItem1';
export default {
  name: 'vd-functional-component',
  components: {
    [InputItem.name]: InputItem,
    [InputItem1.name]: InputItem1,
  },
  data() {
    return {
      userName: '',
      password: '',
      inputItems: [
        {
          title: '用户名:',
          placeholder: '请输入用户名',
        },
        {
          title: '密码:',
          placeholder: '请输入密码',
        },
      ],
    };
  },
  methods: {
    //  titleClickHandler() {
    //    console.log(5678);
    //  }
    itemInputHanlder(e, index) {
      if(index === 0) {
        this.userName = e.target.value;
      }else if (index === 1) {
        this.password = e.target.value;
      }
    },
    itemClickHandler(index) {
      console.log(`item index : ${index}`);
    },
    nickNameChangeHandler(e) {
      console.log(e.target.value);
      console.log('nick name did change');
    },
    submitHandler() {
      console.log('submit click handler');
    }
  },
};
</script>

<style scoped lang="scss">
.functional-component {
  padding: 15px;
  background: #eee;
}
</style>
