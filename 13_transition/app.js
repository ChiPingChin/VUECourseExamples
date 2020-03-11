var app = new Vue({
  el: '#app',
  data: {
    seen: true
  },
  methods: {
    showClickHandler() {
      this.seen = !this.seen;
    }
  }
});