<template>
  <div class="todo-demo-01">
    <div class="add-todo">
      <label for="todo-title"
        >标题<input
          type="text"
          id="todo-title"
          placeholder="请输入todo标题"
          v-model="todoTitle"
      /></label>
      <label for="todo-content"
        >内容<input
          type="text"
          id="todo-content"
          placeholder="请输入todo内容"
          v-model="todoContent"
      /></label>
      <VXButton class="add" @click="addTodoButtonHandler">add</VXButton>
    </div>
    <div class="todo-list">
      <h5>Todo List</h5>
      <span>total todo count: {{ totalTodoCount }}</span>
      <ul>
        <TodoItem v-for="item in todos" :key="item.id" v-bind="item" @delete="deleteTodoItem(item.id)" @complete="completeTodo(item.id)"/>
      </ul>
    </div>
  </div>
</template>

<script>
import VXButton from '../../components/VXButton';
import TodoItem from '../../components/TodoItem';
import {
  mapState,
  mapGetters,
  mapMutations,
} from 'vuex';


export default {
  name: 'vx-todo-demo-01',
  components: {
    VXButton,
    TodoItem,
  },
  data() {
    return {
      todoTitle: '',
      todoContent: '',
    }
  },
  methods: {
    addTodoButtonHandler() {
      const { todoTitle, todoContent } = this;
      const id = Date.now();
      const todo = {
        title: todoTitle,
        content: todoContent,
        complete: false,
        id,
      };
      this.addTodo(todo);
      this.todoTitle = '';
      this.todoContent = '';
    },
    deleteTodoItem(id) {
      this.deleteTodo(id);
    },
    ...mapMutations('todo', ['addTodo', 'deleteTodo', 'completeTodo']),
  },
  computed: {
    ...mapState('todo', ['todos']),
    ...mapGetters('todo', ['totalTodoCount']),
  },
}
</script>

<style scoped>
.todo-demo-01 {
  padding: 10px 15px;
}

.add-todo {
  border: 1px solid orangered;
  padding: 8px;
}

.add-todo > label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 15px;
}

.add-todo > label input {
  flex: 1;
  margin-left: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  padding: 6px;
}

.add {
  display: block;
  margin: 0 auto;
}

.todo-list {
  margin-top: 10px;
  border: 1px solid #888;
  padding: 8px;
  text-align: center;
}
</style>