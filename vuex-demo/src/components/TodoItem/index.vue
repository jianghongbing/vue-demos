<template>
  <li class="todo-item">
    <p class="title">{{ title }}</p>
    <p class="content">{{ content }}</p>
    <p class="status">完成状态: {{complete ? "完成" : '未完成'}}</p>
    <button class="btn left" @click="$emit('delete')">Delete</button>
    <button class="btn right" @click="$emit('complete')">Complete</button>
  </li>
</template>

<script>
export default {
  name: 'vx-todo-item',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.todo-item {
  text-align: center;
  border: 1px solid orange;
  border-radius: 4px;
  padding: 6px;
  margin-top: 5px;
}
.todo-item::after {
  content: "";
  display: block;
  clear: both;
}

.title {
  font-weight: bold;
  color: royalblue;
}
.content {
  color: orange;
  text-align: start;
}
.btn {
  background: #2ab26b;
  color: #fff;
  padding: 10px;
  margin-top: 8px;
  outline: none;
  border: none;
  border-radius: 5px;
  min-width: 80px;
}
.left {
  float: left;
}
.right {
  float: right;
}
.status {
  color: red;
}
</style>