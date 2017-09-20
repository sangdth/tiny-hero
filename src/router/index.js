import Vue from 'vue';
import Router from 'vue-router';
import TinyGame from '@/components/TinyGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TinyGame',
      component: TinyGame,
    },
  ],
});
