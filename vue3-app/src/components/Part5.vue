<script setup lang="ts">
import { computed, ref } from 'vue';

let id = 0;
const newTodo = ref('');
const hideCompleted = ref(false);

const todos = ref([
  { id: id++, text: '222', done: false },
  { id: id++, text: '2224', done: false },
  { id: id++, text: '2225', done: false },
]);

const filterTodos = computed(() => {
  const filters = hideCompleted.value ? todos.value.filter(v => !v.done) : todos.value;
  return filters;
});

function add() {
  if (newTodo.value) {
    todos.value.push({ id: id++, text: newTodo.value, done: false });
    newTodo.value = '';
  }
}

function remove(todo: { id: number; text: string }) {
  todos.value = todos.value.filter(i => i.id !== todo.id);
}
</script>

<template>
  <form @submit.prevent="add">
    <input v-model="newTodo" type="text" required placeholder="new todo">
    <button>Add TODO</button>
  </form>
  <ul>
    <li v-for="todo in filterTodos" :key="todo.id">
      <input v-model="todo.done" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}
        <button @click="remove(todo)">
          X
        </button>
      </span>
    </li>
  </ul>

  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "show All" : "Hidden Completed" }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
