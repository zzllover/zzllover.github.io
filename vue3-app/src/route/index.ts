import { createRouter, createWebHashHistory } from 'vue-router';
import Part1 from '../components/Part1.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/part1', component: Part1 },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
