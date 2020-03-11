Vue.component('TodoForm', {
  data(){
    return {
      input: ''
    }
  },
  methods:{
    submitHandler(e){
      // e.preventDefault();
      this.$emit('addTodo', this.input)
    }
  },
  template: `
    <section class="style-1" data-name="TodoForm.js">
      <form class="todo-form" @submit.prevent="submitHandler">
        <input v-model="input" />
      </form>
    </section>
  `
});
