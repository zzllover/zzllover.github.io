<script setup lang="ts">
import { ref } from 'vue';

const status = ref(true);

function toggle() {
  status.value = !status.value;
}
</script>

<template>
  <!-- 事件监听 -->
  <button @click="toggle">
    Toggle
  </button>
  <h1 v-if="status">
    Win
  </h1>
  <h1 v-else>
    Lose
  </h1>
</template>
