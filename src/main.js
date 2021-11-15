import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/tailwind.css';
import App from './App.vue';
import Home from './views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'IP Address Tracker',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

createApp(App).use(router).mount('#app');
