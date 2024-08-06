import { createRouter, createWebHashHistory } from 'vue-router';
import Part1 from '../components/Part1.vue';
import Part2 from '../components/Part2.vue';

const routes = [
  { path: '/', component: Part1 },
  { path: '/part2', component: Part2 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
