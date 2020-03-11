<script>
import Vuex from 'vuex';

export default {
  computed: {
    ...Vuex.mapGetters(['userName']),
  },
};
</script>

<template>
  <main>
    <div class="container">
      <h1>hi {{ userName }}</h1>
    </div>
  </main>
</template>
