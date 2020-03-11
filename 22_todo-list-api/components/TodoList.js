Vue.component('TodoList', {
  props:{
    url:String
  },
  data(){
    return {
      list: []
    }
  },
  methods:{
    addTodoHandler(newAddTodoText){
      console.log('addItem POST Data');
      $.ajax({
        method: "POST",
        url: this.url,
        data:{ text:newAddTodoText }
      }).then( newTodo => {
        this.list.push(newTodo);
      });
    },
    toggleDoneHandler(id){ 
      console.log('toggleItem PUT Data');
      $.ajax({
        method: "PUT",
        url: this.url,
        data:{ id }
      }).then((response)=>{
        this.list = response;
      });
    }
  },
  mounted(){
    console.log('fetch list JSON Data');
    $.get(this.url)
      .then((response)=>{
        this.list = response;
      });
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
