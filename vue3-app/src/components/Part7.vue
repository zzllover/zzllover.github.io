<script setup lang="ts">
import { ref, watch } from 'vue';

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`,
  );
  todoData.value = await res.json();
}
fetchData();

// 侦听器
watch(todoId, () => {
  fetchData();
});
</script>

<template>
  <p>TODO Id: {{ todoId }}</p>
  <button :disabled="!todoData" @click="todoId++">
    fetch new data
  </button>
  <p v-if="!todoData">
    Loading...
  </p>
  <pre v-else>
    {{ todoData }}
  </pre>
</template>
