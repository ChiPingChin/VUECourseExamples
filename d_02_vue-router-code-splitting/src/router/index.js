import Vue from 'vue';
import VueRouter from 'vue-router';


const Home = () => import('@/components/Home.vue');
const Videos = () => import(/* webpackChunkName: "Videos" */'@/components/Videos.vue');
const Overlay = () => import(/* webpackChunkName: "Overlay" */'@/components/Overlay.vue');


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
