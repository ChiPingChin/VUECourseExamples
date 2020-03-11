<script>
import useFetchData from '../hooks/useFetchData';

export default {
  setup() {
    const state = useFetchData();

    return {
      state,
    };
  },
};
</script>

<template>
  <section data-name="CompositionApiUseFetchData">
    <p> {{ state.isLoading }}</p>
    <p> {{ state.userData }}</p>
  </section>
</template>
