<script>
import CompositionApiBasic from './components/CompositionApiBasic.vue';
import BasicFethData from './components/BasicFethData.vue';
import CompositionApiUseFetchData from './components/CompositionApiUseFetchData.vue';

export default {
  components: {
    CompositionApiBasic,
    BasicFethData,
    CompositionApiUseFetchData,
  },
};
</script>

<template>
  <div id="app">
    <CompositionApiBasic />
    <BasicFethData />
    <CompositionApiUseFetchData />
  </div>
</template>

<style lang="scss" src="./App.scss">
</style>
