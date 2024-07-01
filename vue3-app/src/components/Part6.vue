<script setup lang="ts">
import { onMounted, ref } from 'vue';

const pElementRef = ref<Element | null>(null);

// 生命周期
onMounted(() => {
  pElementRef.value && (
    pElementRef.value.textContent = 'mounted!'
  );
});
</script>

<template>
  <!-- ref 绑定元素 -->
  <p ref="pElementRef">
    Hello
  </p>
</template>
