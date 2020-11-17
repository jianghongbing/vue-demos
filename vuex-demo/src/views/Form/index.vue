<template>
  <div class="form">
    <label for="userName"
      >userName:<input
        type="text"
        id="userName"
        placeholder="请输入用户名"
        :value="userName"
        @input="userNameInputHandler"
    /></label>
    <label for="password"
      >password:<input
        type="text"
        id="password"
        placeholder="请输入密码"
        v-model="inputPassword"
    /></label>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const {
  mapState,
  mapMutations
} = createNamespacedHelpers('form');

export default {
  name: 'vx-form',
  computed: {
    ...mapState(['userName'], 'password'),
    inputPassword: {
      get() {
        return this.password;
      },
      set(value) {
        this.updatePassword(value);
      }
    }
  },
  methods: {
    ...mapMutations(['updateUserName', 'updatePassword']),
    userNameInputHandler(e) {
      this.updateUserName(e.target.value);  
    }
  },

}
</script>

<style scoped>
.form {
  padding: 15px;
}

label {
  display: block;
}

input {
  margin-left: 5px;
  border: 1px solid #eee;
  padding: 8px;
  border-radius: 5px;
}
</style>