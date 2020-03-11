import Vue from 'vue';

import App from '@/components/App.vue';
import './css/theme.scss';
import DebugComponent from '@/components/DebugComponent';

Vue.component(DebugComponent.name, DebugComponent);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
