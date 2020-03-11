<script>
import Child from './Child.vue';

export default {
  components: {
    Child,
  },
  data: () => ({
    name: 'milkmidi',
  }),
  methods: {
    clickHandler() {
      console.log('clickHandler');
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <h1>hi Webpack {{ name }}</h1>
      <button @click="clickHandler">
        Button
      </button>
      <Child />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
  color: red;
}
</style>
