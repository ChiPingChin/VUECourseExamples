/* eslint no-console: 0 */
import VueRouter from 'vue-router';
import Vue from 'vue';


import store from '../store';


Vue.use(VueRouter);
const Main = () => import(/* webpackChunkName: "Main" */'../pages/Main.vue');
const Login = () => import(/* webpackChunkName: "Login" */'../pages/Login.vue');


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/login', component: Login },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
    return;
  }
  const { isLogin } = store.getters;
  if (isLogin) {
    next();
  } else {
    next({ path: '/login' });
  }
});
export default router;
