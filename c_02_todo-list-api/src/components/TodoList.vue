<script>
import axios from 'axios';
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';

export default {
  components: {
    TodoItem,
    TodoForm,
  },
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    list: [],
  }),
  mounted() {
    // TODO
    axios.get(this.url).then((response) => {
      this.list = response.data;
    });
  },
  methods: {
    addTodoHandler(text) {
      axios({
        method: 'POST',
        url: this.url,
        data: {
          text,
        },
      }).then((response) => {
        const { data } = response;
        this.list.push(data);
      });
    },
    toggleDoneHandler(id) {
      axios({
        method: 'PUT',
        url: this.url,
        data: { id },
      }).then((response) => {
        const { data } = response;
        this.list = data;
      });
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
