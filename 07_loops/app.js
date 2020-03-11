var app = new Vue({
  el: '#app',
  data: {
    todos: [
      { text: '學會 JavaScript' },
      { text: '學會 Vue' },
      { text: '年薪百萬' }
    ],
    userData:{
      name: 'milkmidi',
      age: 18,
      skill: ['vue', 'react', 'android', 'nodejs', 'flash!!!']
    }
  },
  methods:{
    addHandler(){
      var newData = {
        text: new Date().toString()
      };
      this.todos.push(newData);
    }
  }
});