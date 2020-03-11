var app = new Vue({
  el: '#app',
  data: {
    count: 0
  },
  watch: {
    count(newVal, oldVal){
      console.log('new:'+ newVal, 'old:' + oldVal);
    }
  },
  methods:{
    add(){
      this.count += 1;
    }
  }
});