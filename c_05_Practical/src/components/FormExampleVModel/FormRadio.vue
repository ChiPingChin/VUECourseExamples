<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },

};
</script>

<template>
  <div class="block">
    <h4>radio</h4>
    <label>
      <input
        name="gender"
        type="radio"
        value="1"
        :checked="value===1"
        @input="$emit('input', $event.target.value)"
      >男
    </label>
    <label>
      <input
        name="gender"
        type="radio"
        value="0"
        :checked="value===0"
        @input="$emit('input', $event.target.value)"
      >女
    </label>
    <p>{{ value }}</p>
  </div>
</template>
