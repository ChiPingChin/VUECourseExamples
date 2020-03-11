<script>
import fetchData from '../services/api';

export default {
  data: () => ({
    userData: {},
    isLoading: false,
  }),
  async mounted() {
    this.isLoading = true;
    const userData = await fetchData();
    this.userData = userData;
    this.isLoading = false;
  },
};
</script>

<template>
  <section data-name="BasicFethData">
    <h2>{{ isLoading }}</h2>
    <h3>{{ userData }}</h3>
  </section>
</template>
