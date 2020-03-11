
var filterUtil = {
  all: function (todos) {
    return todos;
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.done;
    });
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.done;
    });
  }
}

Vue.component('TodoList', {
  data(){
    return {
      list: [
        { id: 1 , text: '學會 Vue', done: false},
        { id: 2 , text: '年薪百萬', done: true},
        { id: 3 , text: '也學一下 react', done: false},
      ],
      visibility: 'all'
    }
  },
  computed:{
    filtersList(){
      return filterUtil[this.visibility](this.list);
    }
  },
  methods:{
    addTodoHandler(newAddTodoText){
      this.list.push({
        id: new Date().getTime(),
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
    <div class="todo-list">
      <TodoForm @addTodo="addTodoHandler" />
      <section data-name="TodoList">
        <transition-group name="list" tag="ul" class="todo-items">
          <TodoItem 
            v-for="item in filtersList"
            :key="item.id"
            :id="item.id"
            :text="item.text"
            :done="item.done"
            @deleteTodo="deleteTodoHandler"
            @toggleDone="toggleDoneHandler" />
        </transition-group>
        <p>current visibility:{{visibility}}</p>
      </section>
      <TodoFilters :visibility.sync="visibility" />
    </div>
  `
});
