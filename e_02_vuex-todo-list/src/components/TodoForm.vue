<script>
import Vuex from 'vuex';

export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    ...Vuex.mapMutations(['addTodo']),
  },
};
</script>

<template>
  <section
    data-name="TodoForm.vue"
    class="style-1"
  >
    <form
      class="todo-form"
      @submit.prevent="addTodo(input)"
    >
      <input v-model="input">
    </form>
  </section>
</template>

<style lang="scss">
.todo-form{
  text-align: center;
  input{
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #336;
  }
}
</style>
