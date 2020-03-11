<script>
import TodoList from './TodoList.vue';

export default {
  render() {
    return (
      <div id="app" class="app container">
        <TodoList />
      </div>
    );
  },
};
</script>

<style lang="scss">
.app {
  margin: 0 auto;
  max-width: 500px;
}
</style>
