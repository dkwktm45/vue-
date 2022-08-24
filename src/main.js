import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import './assets/main.css';
import 'bootstrap/dist/js/bootstrap.js';

createApp(App).use(router).mount('#app');

/* 
console.log('Mode : ' + import.meta.env.Mode)
console.log('BASE_URL : ' + import.meta.env.BASE_URL)
console.log('PROD : ' + import.meta.env.PROD)
console.log('DEV : ' + import.meta.env.DEV)
console.log('DEV : ' + import.meta.env.VITE_APP_API_URL) 
*/