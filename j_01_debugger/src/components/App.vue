<script>
import { add, testFun } from '@/utils';

export default {
  data() {
    return {
      name: 'milkmidi',
    };
  },
  methods: {
    testBreakPoint() {
      const a = 1;
      console.log('mounted', a);
      const sum = add(1, 2);
      const test = testFun(1, 2);
      console.log(sum);
      console.log(test);
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <button @click="testBreakPoint">
        VueTestBreakPoint
      </button>
    </div>
  </div>
</template>

<style lang="scss">
section{
  border: 2px solid #bdc3c7;
  margin: 10px 0;
  padding: 1.5rem 1rem 1rem;
  border-radius: 8px;
  position: relative;
}
section::before{
  z-index: 1;
  content: attr(data-name);
  pointer-events: none;
  border-radius: .25rem;
  padding: 0.1rem;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  background-color:#e74c3c;
  font-size: 16px;
}
</style>
