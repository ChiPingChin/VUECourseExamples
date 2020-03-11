var app = new Vue({
  el: '#app',
  data: {
    show: false
  },
  methods:{
    clickHandler(){
      this.show = true;
      console.log(document.querySelector('input'));
      console.log(this.$refs.input);
      this.$nextTick(() => {
        console.log(document.querySelector('input'));
        console.log(this.$refs.input);
        this.$refs.input.focus();
      });
    }
  },
  template: `
    <div id="app">
      <button @click="clickHandler">show</button>
      <input v-if="show" ref="input" />
    </div>
  `
});