<template>
  <div class="custom-event">
    <ButtonList :buttonTitles="buttonTitles" @click="buttonClickHandler" @click.native="buttonListClick"/>
    <br />
    <CustomInput title="用户名:" :value="userName" placeholder="请输入用户名" @input="nameInputHandler" />
    <br />
    <CustomInput1 title="用户名:" placeholder="请输入用户名" v-model="userName"/>
    <br>
    <RecordClickNumberButton v-bind:count.sync="clickCount" />
  </div>
</template>

<script>
import ButtonList from './ButtonList';
import CustomInput from './CustomInput';
import CustomInput1 from './CustomInput1';
import RecordClickNumberButton from './RecordClickNumberButton';
export default {
  name: 'vd-custom-event',
  components: {
    ButtonList,
    CustomInput,
    CustomInput1,
    RecordClickNumberButton,
  },
  data() {
    return {
      buttonTitles: [0, 1, 2, 3, 4],
      userName: '',
      email: '',
      clickCount: 0,
    }
  },
  methods: {
    buttonClickHandler(event, index) {
      console.log(event);
      alert(`clicked button at ${index}`);
    },
    nameInputHandler(text) {
      this.userName = text;
    },
    buttonListClick() {
      alert('button list div click');
    }
  },
}
</script>

<style scoped lang='scss'>
.custom-event {
  padding: 15px;
  // text-align: center;
}
</style>