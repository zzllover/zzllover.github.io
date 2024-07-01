<script setup lang="ts">
import { reactive, ref } from 'vue';

const counter = reactive({ count: 0 });
const title = ref('Vue first class');
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ counter.count }}</p>
</template>
