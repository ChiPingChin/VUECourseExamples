import Vue from 'vue';
import './css/style.scss';
import App from './components/App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
