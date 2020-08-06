<template>
  <div class="form-bind">
    <p>不使用v-model实现双向绑定</p>
    <input type="text" placeholder="请输入" v-bind:value="inputText" @input="updateText" />
    <p>使用v-model实现双向绑定</p>
    <!-- 去除下面的v-model="inputText", 试试看 -->
    <input type="text" placeholder="请输入" v-model.trim="inputText" value="1234" />
    <p>
      输入的文字:
      <span class="message">{{inputText}}</span>
    </p>
    <button @click="inputText=''">Clear Input Text</button>
    <fieldset>
      <legend>请选择你喜爱的城市</legend>
      <label>
        <input type="radio" name="favorite-city" v-model="city" value="北京" />北京
      </label>
      <br />
      <label>
        <input type="radio" name="favorite-city" v-model="city" value="上海" />上海
      </label>
      <br />
      <label>
        <input type="radio" name="favorite-city" v-model="city" value="深圳" />深圳
      </label>
      <br />
      <label>
        <input type="radio" name="favorite-city" v-model="city" value="广州" />广州
      </label>
      <p>你选择了:<span class="message">{{city}}</span></p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'vd-form-bind',
  data() {
    return {
      inputText: '',
      city: '上海',
    }
  },
  methods: {
    updateText(e) {
      this.inputText = e.target.value;
    }
  }
}
</script>

<style scoped lang='scss'>
.form-bind {
  padding: 15px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  p {
    margin: 10px;
  }
  input {
    border: 1px solid #eee;
    border-radius: 6px;
    padding: 6px;
  }
  .message {
    color: orangered;
    font-weight: bolder;
    white-space: pre;
  }
  button {
    color: #fff;
    width: 200px;
    background: #1046da;
    font-weight: bold;
    padding: 8px;
    border-radius: 5px;
    font-size: 16px;
  }
  fieldset {
    border: 1px solid orangered;
    padding: 10px;
  }
}
</style>