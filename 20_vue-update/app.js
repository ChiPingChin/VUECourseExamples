var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  methods:{
    clickHandler(){
      console.log(this.$refs.span.textContent);
      this.message = new Date().getTime().toString();
      console.log(this.$refs.span.textContent);
      this.message = new Date().getTime().toString();
      this.message = new Date().getTime().toString();
      this.message = new Date().getTime().toString();
      this.message = new Date().getTime().toString();
      this.message = new Date().getTime().toString();

      this.$nextTick(() => {
        console.log('--- nextTick ---');
        console.log(this.$refs.span.textContent);
      })
    }
  },
  updated(){
    console.log('updated');
  }
});