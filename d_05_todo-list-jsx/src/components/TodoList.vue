<script>
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';

export default {
  data: () => ({
    list: [
      { id: 'id1', text: '學會 Vue', done: false },
      { id: 'id2', text: '年薪百萬', done: false },
    ],
  }),
  methods: {
    addTodoHandler(text:string) {
      this.list.push({
        id: `${+new Date()}`,
        text,
        done: false,
      });
    },
    toggleDoneHandler(id:string) {
      for (let i = 0; i < this.list.length; i += 1) {
        const item = this.list[i];
        if (item.id === id) {
          item.done = !item.done;
          break;
        }
      }
    },
    deleteTodoHandler(id) {
      for (let i = 0; i < this.list.length; i += 1) {
        const item = this.list[i];
        if (item.id === id) {
          this.list.splice(i, 1);
          break;
        }
      }
    },
  },
  render() {
    return (
      <section data-name="TodoList.vue">
        <div class="todo-list">
          <TodoForm onAddTodo={this.addTodoHandler} />
            <ul class="todo-items">
              <transition-group name="list" tag="div">
                {this.list.map((item) => (
                  <TodoItem
                    key={item.id}
                    {...{ props: item }}
                    onDeleteTodo={this.deleteTodoHandler}
                    onToggleDone={this.toggleDoneHandler}
                  />
                ))}
              </transition-group>
            </ul>
        </div>
      </section>
    );
  },
};
</script>


<style lang="scss">
.todo-list {
  border-radius: 5px;
}
.todo-list > h1 {
  text-align: center;
  margin: 8px 0 12px;
  padding-bottom: 4px;
  font-size: 28px;
  font-weight: normal;
  color: #68d;
  border-bottom: 1px solid #ddd;
}
.todo-items {
  position: relative;
  padding-left: 0;
  list-style: none;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-enter-to {
  background-color: green;
}

.list-leave-active {
  position: absolute;
  background-color: red;
}
</style>
