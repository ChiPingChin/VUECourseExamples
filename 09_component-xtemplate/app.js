Vue.component('my-user', {
  props: ['name', 'image'],
  template: '#my-user'
});


var app = new Vue({
  el: '#app'
});