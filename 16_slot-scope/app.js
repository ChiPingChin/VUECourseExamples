Vue.component('card', {
  data(){
    return {
      text: '我是card 裡的文字',
      count: 9527,
    }
  },
  template: `
    <div class="card">
      <div class="card-body">
        <slot 
          :text="text"
          :count="count" />
      </div>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template: `
    <div id="app" class="container">
      <card>
        <template v-slot="{text,count}">
          <p>{{text}}</p>
          <p>{{count}}</p>
        </template>
      </card>
    </div>
  `
});