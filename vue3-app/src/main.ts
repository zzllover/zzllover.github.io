import { createApp } from 'vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import './style.css';
import App from './App.vue';
import router from './route';

createApp(App)
  .use(router)
  .use(createVuetify())
  .mount('#app');
