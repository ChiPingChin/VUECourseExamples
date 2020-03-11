<script>
export default {
  data() {
    return {
      checkbox: ['學會Vue'],
    };
  },
  methods: {
    getValue() {
      return this.checkbox;
    },
  },
};
</script>

<template>
  <div class="block">
    <h4>checkbox</h4>
    <label>
      <input
        v-model="checkbox"
        type="checkbox"
        value="學會Vue"
      >學會React
    </label>
    <label>
      <input
        v-model="checkbox"
        type="checkbox"
        value="年薪百萬"
      >年薪百萬
    </label>
    <label>
      <input
        v-model="checkbox"
        type="checkbox"
        value="早點下班"
      >早點下班
    </label>
    <p>{{ checkbox }}</p>
  </div>
</template>
