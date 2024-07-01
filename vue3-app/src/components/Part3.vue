<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
function increment() {
  count.value++;
}

const text = ref('');
</script>

<template>
  <!-- 事件监听 -->
  <button @click="increment">
    {{ count }}
  </button>
  <div>
    <input v-model="text" placeholder="Input something">
    <p>{{ text }}</p>
  </div>
</template>
