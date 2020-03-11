Vue.component('card', {
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <slot name="title" />
        </h5>
        <p class="card-text">
          <slot name="text" />
        </p>
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
        <p slot="title">我是Title</p>
        <p slot="text">我是內文</p>
      </card>
      <card>
        <template slot="title">我是Title</template>
        <template slot="text">我是Text</template>
      </card>
    </div>
  `
});