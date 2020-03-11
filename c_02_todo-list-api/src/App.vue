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
    <!-- TODO -->
    <TodoList url="/api/list/milkmidi" />
  </div>
</template>

<style lang="scss">
#app {
  max-width: 500px;
  margin: 0 auto;
}
</style>
