var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    href: 'http://milkmidi.blogspot.com',
    ok: true,
  },
  methods:{
    clickHandler: function(){
      this.ok = !this.ok;
      this.message = new Date() * 1;
    },
    clickHandler2(message){ // ES6 縮寫, function 這個字可以不用寫
      this.message = message;
    }
  }
});