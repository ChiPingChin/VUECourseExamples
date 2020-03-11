import Vue, { CreateElement } from 'vue';
import 'css/style.scss';
import App from '@/components/App.vue';

// var a = 3;

new Vue({
  render(h:CreateElement) {
    return h(App);
  },
}).$mount('#app');
