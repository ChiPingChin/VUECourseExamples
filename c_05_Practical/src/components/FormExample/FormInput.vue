<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    getValue() {
      return this.name;
    },
  },

};
</script>

<template>
  <div class="block">
    <h4>input</h4>
    <input
      v-model="name"
      type="text"
    >
    <p>{{ name }}</p>
  </div>
</template>
