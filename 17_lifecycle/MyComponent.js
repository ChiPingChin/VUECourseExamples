Vue.component('MyComponent', {
  data(){
    return {
      count:0
    }
  },
  methods:{
    mousemoveHandler(e){
      console.log(e);
    }
  },
  mounted(){
    console.log('mounted');
    this.intervalId = setInterval(() => {
      this.count += 1;
      console.log('interval');
    }, 1000);
    window.addEventListener('mousemove', this.mousemoveHandler);
  },
  beforeDestroy(){
    console.log('beforeDestroy');
    clearInterval(this.intervalId);
    window.removeEventListener('mousemove', this.mousemoveHandler);
  },
  template: `
    <div>
      <h2>MyComponent</h2>
      <p>Count:{{count}}</p>
    </div>
  `
});