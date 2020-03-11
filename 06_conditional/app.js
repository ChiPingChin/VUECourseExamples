var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods: {
    showClickHandler() {
      this.show = !this.show;
    }
  }
});