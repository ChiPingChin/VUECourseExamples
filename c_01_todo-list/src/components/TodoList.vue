<script>
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';

export default {
  components: {
    TodoItem,
    TodoForm,
  },
  data() {
    return {
      list: [
        { id: 'id1', text: '學會 Vue', done: false },
        { id: 'id2', text: '年薪百萬', done: false },
      ],
    };
  },
  methods: {
    addTodoHandler(text) {
      this.list.push({
        id: `${new Date().getTime()}`,
        text,
        done: false,
      });
    },
    toggleDoneHandler(id) {
      for (let i = 0; i < this.list.length; i += 1) {
        const item = this.list[i];
        if (item.id === id) {
          item.done = !item.done;
          break;
        }
      }
    },
  },
};
</script>

<template>
  <section data-name="TodoList.vue">
    <div class="todo-list">
      <TodoForm @addTodo="addTodoHandler" />
      <ul class="todo-items">
        <TodoItem
          v-for="item in list"
          :key="item.id"
          v-bind="item"
          @toggleDone="toggleDoneHandler"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.todo-list {
  padding: 0 10px;
  font-family: "Microsoft JhengHei";
  border-radius: 5px;
  margin: 10px auto;
}
.todo-items {
  padding-left: 0;
  list-style: none;
}
</style>
