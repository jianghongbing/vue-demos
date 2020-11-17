const state = {
  userName: '',
  password: '',
}

const mutations = {
  updateUserName(state, userName) {
    state.userName = userName;
  },
  updatePassword(state, password) {
    state.password = password;
  }
}
const form = {
  namespaced: true,
  state,
  mutations,
}

export default form;