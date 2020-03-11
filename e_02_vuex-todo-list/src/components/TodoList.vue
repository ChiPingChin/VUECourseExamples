<script>
import Vuex from 'vuex';
import TodoItem from './TodoItem.vue';
import TodoForm from './TodoForm.vue';

export default {
  components: {
    TodoItem,
    TodoForm,
  },
  computed: {
    ...Vuex.mapState(['list']),
  },
  methods: {
    ...Vuex.mapMutations(['toggleTodo']),
  },
};
</script>

<template>
  <section data-name="TodoList.vue">
    <div class="todo-list">
      <TodoForm />
      <ul class="todo-items">
        <TodoItem
          v-for="item in list"
          :key="item.id"
          v-bind="item"
          @toggleDone="toggleTodo"
        />
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.todo-list{
  padding: 0 10px;
  font-family: 'Microsoft JhengHei';
  border-radius: 5px;
  margin: 10px auto;
}
.todo-items{
  padding-left: 0;
  list-style: none;
}
</style>
