<script>
export default {
  data() {
    return {
      selectValue: '',
    };
  },
  methods: {
    getValue() {
      return this.selectValue;
    },
  },

};
</script>

<template>
  <div class="block">
    <h4>select</h4>
    <select v-model="selectValue">
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
    <p>{{ selectValue }}</p>
  </div>
</template>
