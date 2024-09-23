import { createRouter, createWebHashHistory } from 'vue-router';
import Part2 from '../components/Part2.vue';
import HomePage from '../page/homepage/index.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/part2', component: Part2 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
