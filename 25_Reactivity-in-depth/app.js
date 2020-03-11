// https://vuejs.org/v2/guide/list.html#Caveats
// https://vuejs.org/v2/guide/list.html#Array-Change-Detection
var app = new Vue({
  el: '#app',
  data: {
    todos: Array.from(Array(5).keys()),
    userData:{
      name: 'milkmidi',
    }
  },
  methods:{
    doRandom(){
      this.todos[1] = 10000;
      console.log(this.todos);
      // 
      this.userData.dynamicValue = '我是動態新增的值';
      console.log(this.userData);
    },
    doRandom2(){
      Vue.set(this.todos, 1, 9527);
      this.$set(this.todos, 1, 9528); // 或這樣寫也可以
      // 
      Vue.set(this.userData, 'dynamicValue', '我是 set 的動態值')
    },
    doObjectAssign(){
      var newArr = this.todos.concat();
      newArr[5] = 9999;
      this.todos = newArr;

      // this.userData = Object.assign({}, this.userData, {abc:'xyz'});
      // 或是使用 ES6 spread
      // https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=G4QwTgBA9hC8EG8BQEIDsQFsCmAuCA5JgJYA2A1iQCbEFIC-A3EkqJAEZyIoQB0_UADQ8QAczwQAjAA4GQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2017%2Creact%2Cenv&prettier=false&targets=&version=7.3.4
      this.userData = {
        ...this.userData,
        abc: 'es6spread'
      }
    }
  }
});