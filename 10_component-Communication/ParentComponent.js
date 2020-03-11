Vue.component('parent-component', {
  // data Must Be a Function
  data(){
    return {
      count: 0,
      childName: 'default',
    }
  },
  methods:{
    childCustomEventHandler(val){
      console.log(val);
      this.childName = val;
    }
  },
  template: `
    <div class="parent-component">
      <h1>ParentComponent</h1>
      <button @click="count+=1">addCount</button>
      <p>data.count:{{count}}</p>
      <p>childName:{{childName}}</p>
      <child-component
        :count="count"
        @childCustomEvent="childCustomEventHandler"/>
    </div>
  `
});