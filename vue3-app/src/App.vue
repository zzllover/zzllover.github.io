<script setup lang="ts">
// import Part1 from './components/Part1.vue';
// import Part2 from './components/Part2.vue';
// import Part3 from './components/Part3.vue';
// import Part4 from './components/Part4.vue';
// import Part5 from './components/Part5.vue';
import { ref } from 'vue';
import Part6 from './components/Part6.vue';
import Part7 from './components/Part7.vue';
import Part8 from './components/Part8.vue';
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
