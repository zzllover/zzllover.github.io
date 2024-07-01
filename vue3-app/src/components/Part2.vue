<script setup lang="ts">
import { ref } from 'vue';

const fontColor = ref('red');
const title = ref('Vue first class');
</script>

<template>
  <!-- attribute 绑定 -->
  <h1 :class="fontColor">
    {{ title }}
  </h1>
</template>

<style>
.red {
  color: red;
}
</style>
