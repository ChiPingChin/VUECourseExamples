
Vue.config.devtools = true;

var app = new Vue({
  el: '#app',
  template: `
  <div id="app">
    <TodoList />
  </div>
`
});