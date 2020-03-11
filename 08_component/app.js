Vue.component('my-user', {
  props: ['name', 'image'],
  template: '<div class="user">'
  + '<img :src="image" />'
  + '<div class="name">{{name}}</div>'
  + '</div>'
});

Vue.component('my-user-es6', {
  props: {
    name: String,
    image: String
  },
  data(){ // Must Be a Function
    return {
      count: 0,
    }
  },
  template: `
    <div class="user">
      <img :src="image" />
      <div class="name">{{name}}</div>
      <p>{{count}}</p>
      <button @click="count++">add</button>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
  },
});