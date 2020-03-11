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
    <h4>select</h4>
    <select
      :value="value"
      @change="$emit('input', $event.target.value)"
    >
      <option value="React">
        React
      </option>
      <option value="Vue">
        Vue
      </option>
      <option value="Angular">
        Angular
      </option>
    </select>
  </div>
</template>
