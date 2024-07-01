<script setup lang="ts">
defineProps<{ msg: string }>();

// 接收 Emits， 子组件向父组件触发事件
const emit = defineEmits<{ response: string[] }>();
emit('response', 'hello from child');
</script>

<template>
  <p>Props from: {{ msg }}</p>

  <!-- slot 插槽用法， 父组件包裹即可 -->
  <slot>Fallback slot content</slot>
</template>
