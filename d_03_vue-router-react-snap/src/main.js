import Vue from 'vue';

import router from './router';

import App from './components/App.vue';


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


window.snapSaveState = () => {
  document.querySelector("#app").setAttribute("data-server-rendered", "true");
};