import Vue from 'vue';
import App from './components/App.vue';
import './css/theme.scss';


new Vue({
  el: '#app',
  render: (h) => h(App),
}).$mount('#app');
