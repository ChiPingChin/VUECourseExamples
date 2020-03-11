Vue.component('TodoList', {
  data(){
    return {
      list: [
        { id: 'id1' , text: '學會 Vue', done: false},
        { id: 'id2' , text: '年薪百萬', done: false},
      ]
    }
  },
  methods:{
    addTodoHandler(newAddTodoText){
      console.log(newAddTodoText);
      this.list.push({
        id: new Date().getTime() + '',
        text: newAddTodoText,
        done: false
      })
    },
    toggleDoneHandler(id){ 
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i];
        if(item.id === id){
          item.done = !item.done;
          break;
        }
      }
    }
  },
  template: `
    <section data-name="TodoList.js">
      <div class="todo-list">
        <TodoForm @addTodo="addTodoHandler"/>
        <ul class="todo-items">
          <TodoItem 
            v-for="item in list"
            :key="item.id"
            :id="item.id"
            :text="item.text"
            :done="item.done"
            @toggleDone="toggleDoneHandler" />
        </ul>
      </div>
    </section>
  `
});
