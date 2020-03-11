<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    done: Boolean,
  },
})
export default class TodoItem extends Vue {
  clickHandler() {
    this.$emit('toggleDone', this.id);
  }
}
</script>

<template>
  <section data-name="TodoItem.vue">
    <li
      class="todo-item"
      :class="{done}"
      @click="clickHandler"
    >
      {{ text }}
    </li>
  </section>
</template>

<style lang="scss">
@keyframes show{
  from{
    opacity:0;
    transform: translateY(-50px);
  }
  to{
    opacity:1;
    transform: none;
  }
}
.todo-item{
  padding: 24px 12px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  transition: background-color .3s;
  animation: show .3s ease-in-out;
  &:before{
    vertical-align: middle;
    margin-right: 24px;
    width: 24px;
    height: 24px;
    content: '';
    display: inline-block;
    background-image: url('~img/checkbox.png')
  }
  &.done{
    text-decoration: line-through;
    color: #888;
    background-color: #f6f6f6;
    &:before{
      background-position: left 24px;
    }
  }
}
</style>
