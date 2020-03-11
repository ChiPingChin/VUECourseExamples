<script>
import dayjs from 'dayjs';

export default {
  // TODO
  filters: {
    formatDate(value) {
      if (!value) return '';
      return dayjs(value).format('YYYY/MM/DD hh:mm');
    },
  },
  props: {
    id: { type: String, required: true },
    text: { type: String, default: '' },
    done: Boolean,
    createAt: { type: String, required: true },
  },
  methods: {
    clickHandler() {
      this.$emit('toggleDone', this.id);
    },
  },
};
</script>

<template>
  <section data-name="TodoItem.vue">
    <li
      class="todo-item"
      :class="{done}"
      @click="clickHandler"
    >
      {{ text | upperCase }}
      <span>{{ createAt | formatDate }}</span>
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
  position: relative;
  span{
    position: absolute;
    right: 0;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
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
