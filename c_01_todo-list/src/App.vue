<script>
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoList,
  },
};
</script>

<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<style lang="scss">
#app{
  max-width: 500px;
  margin: 0 auto;
}
</style>
