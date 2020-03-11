<script>
export default {
  props: {
    rounded: Boolean,
    color: {
      type: String,
      default: '#42b983',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    style() {
      return {
        color: this.color,
        borderColor: this.color,
      };
    },
  },
};
</script>

<template>
  <button
    class="my-button"
    :style="style"
    :class="{rounded}"
    v-on="$listeners"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.my-button {
  cursor: pointer;
  border: 3px solid;
  padding :10px 20px;
  margin-right: 5px;
  background-color: white;
  outline: none;
  &:focus{
    outline: 0;
  }
  &:hover{
    color: white;
    background-color: #dddddd;
  }
  &.rounded{
    border-radius: 20px !important;
  }
}
</style>
