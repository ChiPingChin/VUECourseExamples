Vue.component('my-component', {
  props: ['label'],
  methods:{
    clickHandler(){
      this.$emit('update:label', new Date().getTime().toString());
    }
  },
  template : `
    <div class="my-component">
      <p>{{label}}</p>
      <button @click="clickHandler">子Component更新父Component值</button>
    </div>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});