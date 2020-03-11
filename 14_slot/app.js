Vue.component('card', {
  template: `
    <div class="card">
      <div class="card-body">
        <slot />
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
        <p>我是Title</p>
        <p>{{message}}</p>
      </card>
      <card>
        <template>我是Title</template>
        <template>{{message}}</template>
      </card>
    </div>
  `
});