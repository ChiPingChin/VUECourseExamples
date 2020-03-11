import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import Videos from '@/components/Videos.vue';
import Overlay from '@/components/Overlay.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  {
    path: '/video',
    component: Videos,
    children: [
      {
        path: '/video/:id',
        component: Overlay,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  // mode: 'hash',
  routes,
});
export default router;
