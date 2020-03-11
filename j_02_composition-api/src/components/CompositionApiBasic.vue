<script>
import {
  reactive, computed, onMounted, watch,
} from '@vue/composition-api';

export default {
  setup() {
    // data
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    watch(() => {
      console.log(state.count);
    });

    // methods
    function increment() {
      state.count += 1;
    }

    // lifeCycle mounted
    onMounted(() => {
      console.log('onMounted');
    });

    return {
      state,
      increment,
    };
  },
};
</script>

<template>
  <section data-name="CompsitionApiBasic">
    <button @click="increment">
      Count is: {{ state.count }}, double is: {{ state.double }}
    </button>
  </section>
</template>
