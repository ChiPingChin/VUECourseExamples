Vue.component('TodoList', {
  data(){
    return {
      list: [
        { id: '1' , text: '學會 Vue', done: false},
        { id: '2' , text: '年薪百萬', done: false}
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
    },
    deleteTodoHandler(id){
      for (var i = 0; i < this.list.length; i++) {
        var item = this.list[i];
        if(item.id === id){
          this.list.splice(i, 1);
          break;
        }
      }
    }
  },
  template: `
    <section data-name="TodoList.js">
      <div class="todo-list">
        <TodoForm @addTodo="addTodoHandler"/>
        <div class="todo-items">
          <transition-group name="list" tag="div">
            <TodoItem 
              v-for="item in list"
              :key="item.id"
              :id="item.id"
              :text="item.text"
              :done="item.done"
              @deleteTodo="deleteTodoHandler"
              @toggleDone="toggleDoneHandler" />
          </transition-group>
        </div>
      </div>
    </section>
  `
});
