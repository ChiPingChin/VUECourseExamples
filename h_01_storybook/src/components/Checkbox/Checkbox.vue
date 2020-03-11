<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    disabled: Boolean,
    value: {
      type: [Array, String, Boolean],
      required: true,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  watch: {
    inputValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.inputValue = val;
    },
  },
};
</script>

<template>
  <div
    class="checkbox"
    :class="{disabled}"
  >
    <label>
      <input
        v-model="inputValue"
        type="checkbox"
        :value="label"
      >
      <span />
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  margin-left: 2px;
  margin-right: 8px;
  display: inline-block;
  position: relative;
  background-color: white;
  &.disabled {
    pointer-events: none;
    opacity: .4;
  }
  label {
    display: flex;
    cursor: pointer;
    color: black;
    font-size: 1.3em;
    position: relative;
    line-height: 1.3rem;
    &:hover {
      span {
        border-color: #3498db;
      }
    }
    input[type="checkbox"]{
      position: absolute;
      visibility: hidden;
      &:checked + span{
        &:after {
          transform: scale(1);
        }
      }
    }
    span {
      align-self: center;
      margin-right: 5px;
      display :inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid black;
      position :relative;
      transition: border 0.35s ease;
      &:after {
        display: block;
        transition: all 0.35s ease;
        transform: scale(0);
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #3498db;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
  }
}
</style>
