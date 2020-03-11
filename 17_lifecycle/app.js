var app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  methods:{
    toggleShow(){
      this.show = !this.show;
    }
  }
});