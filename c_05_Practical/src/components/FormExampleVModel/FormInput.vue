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
    <h4>input</h4>
    <input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <p>{{ value }}</p>
  </div>
</template>
