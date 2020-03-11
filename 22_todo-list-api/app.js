
Vue.config.devtools = true;

var app = new Vue({
  el: '#app',
  template: `
  <div id="app">
    <TodoList url="https://k9wvmn0z75.sse.codesandbox.io/api/list/milkmidi" />
  </div>
`
});