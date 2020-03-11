<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    done: Boolean,
  },
  methods: {
    clickHandler(e:MouseEvent) {
      if (e.target === e.currentTarget) {
        this.$emit('toggleDone', this.id);
      }
    },
    deleteClickHandler() {
      this.$emit('deleteTodo', this.id);
    },
  },
  render() {
    const clazz = `todo-item ${this.done ? 'done' : ''}`;
    return (
        <li class={clazz} onClick={this.clickHandler}>
          {this.text}
          <button
            class="todo-item__btn btn btn-info"
            onClick={this.deleteClickHandler}
          >
            x
          </button>
        </li>
    );
  },
};
</script>


<style lang="scss">
.todo-item__btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
.todo-item {
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ddd;
  padding: 24px 12px;
  font-size: 16px;
  cursor: pointer;
  color: #333;
  transition: all 0.5s;
  &:first-child {
    border-top: 1px solid #ddd;
  }
  &:before {
    vertical-align: middle;
    width: 24px;
    height: 24px;
    content: "";
    display: inline-block;
    background-image: url("~img/checkbox.png");
  }
  &.done {
    text-decoration: line-through;
    color: #888;
    background-color: #f6f6f6;
    &:before {
      background-position: left 24px;
    }
  }
}
</style>
