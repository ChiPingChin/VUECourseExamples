<script>
export default {
  data() {
    return {
      gender: '',
    };
  },
  methods: {
    getValue() {
      return this.gender;
    },
  },
};
</script>

<template>
  <div class="block">
    <h4>radio</h4>
    <label>
      <input
        v-model="gender"
        name="gender"
        type="radio"
        value="1"
      >男
    </label>
    <label>
      <input
        v-model="gender"
        name="gender"
        type="radio"
        value="0"
      >女
    </label>
    <p>{{ gender }}</p>
  </div>
</template>
