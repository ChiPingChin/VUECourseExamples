<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    submitHandler() {
      this.$emit('addTodo', this.input);
    },
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
      @submit.prevent="submitHandler"
    >
      <input v-model="input">
    </form>
  </section>
</template>

<style lang="scss">
.todo-form {
  text-align: center;
  input {
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    color: #336;
  }
}
</style>
