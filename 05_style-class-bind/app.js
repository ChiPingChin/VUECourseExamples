var app = new Vue({
  el: '#app',
  data: {
    red: false
  },
  computed:{
    boxStyle(){
      if(this.red){
        return {
          color: 'green',
          width: '200px',
          height: '200px',
          fontSize: '20px'
        }
      }
      return {
        color: 'red',
        fontSize: '14px'
      }
    }
  },
  methods: {
    clickHandler(){
      this.red = !this.red;
    }
  }
});