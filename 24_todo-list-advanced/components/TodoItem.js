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
  },
  template: `
    <li class="todo-item" :class="{done}" @click.self="clickHandler">
      {{text}}
      <button class="todo-item-delete" @click="$emit('deleteTodo', id)">x</button>
    </li>
  `
});
