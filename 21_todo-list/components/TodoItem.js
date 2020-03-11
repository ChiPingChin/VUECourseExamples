Vue.component('TodoItem', {
  props:{
    id: String,
    text: String,
    done: Boolean
  },
  methods:{
    clickHandler(){
      this.$emit('toggleDone', this.id)
    }
  },
  template: `
    <section data-name="TodoItem.js">
      <li class="todo-item" :class="{done}" @click="clickHandler">
        {{text}}
      </li>
    </section>
  `
});
