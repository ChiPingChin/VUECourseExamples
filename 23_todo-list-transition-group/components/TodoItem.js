Vue.component('TodoItem', {
  props:{
    id: String,
    text: String,
    done: Boolean
  },
  methods:{
    clickHandler(){
      this.$emit('toggleDone', this.id)
    },
    deleteClickHandler(){
      console.log('delete', this.id);
      this.$emit('deleteTodo', this.id)
    }
  },
  template: `
    <li class="todo-item" :class="{done}" @click="clickHandler">
      {{text}}
      <button class="todo-item-delete" @click="deleteClickHandler">x</button>
    </li>
  `

});
