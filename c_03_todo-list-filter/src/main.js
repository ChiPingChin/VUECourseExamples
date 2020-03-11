import Vue from 'vue';
import App from './components/App.vue';
import './css/style.scss';

Vue.config.productionTip = false;

// TODO
// https://vuejs.org/v2/guide/filters.html
Vue.filter('upperCase', (value) => {
  if (!value) {
    return '';
  }
  return value.toUpperCase();
});

new Vue({
  render: (h) => h(App),
}).$mount('#app');
