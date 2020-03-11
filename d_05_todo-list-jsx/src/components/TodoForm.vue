<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    submitHandler(e:InputEvent) {
      e.preventDefault();
      if (this.input !== '') {
        this.$emit('addTodo', this.input);
        this.input = '';
      }
    },
  },
  render() {
    return (
      <section data-name="TodoForm.vue">
        <form class="todo-form" onSubmit={this.submitHandler}>
          <input v-model={this.input} />
        </form>
      </section>
    );
  },
};
</script>


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
