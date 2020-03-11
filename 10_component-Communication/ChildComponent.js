Vue.component('child-component', {
  props:{
    count:{
      type:Number
    }
  },
  methods:{
    clickHandler(){
      this.$emit('childCustomEvent', '我是ChildComponent');
    }
  },
  template: `
    <div class="child-component">
      <h3>ChildComponent</h3>
      <p>props.count:{{this.count}}</p>
      <button @click="clickHandler">call parent</button>
    </div>
  `
});