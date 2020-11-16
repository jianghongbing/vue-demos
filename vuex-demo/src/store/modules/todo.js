// const state = {
//   // todoItems: [],

// };

const state = {
  todos: [],
};

const getters = {
  totalTodoCount(state) {
    return state.todos.length;
  },
};

const mutations = {
  addTodo(state, todo) {
    state.todos = [...state.todos, todo];
  },
  deleteTodo(state, id) {
    state.todos = state.todos.filter((item) => item.id !== id);
  },
  completeTodo(state, id) {
    state.todos = state.todos.map(item => {
      if (id === item.id) {
        item.complete = true;
      }
      return item;
    })
  },
};

const todo = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export default todo;
