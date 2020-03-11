<script>

import RegionSelect from './RegionSelect.vue';
import RegionSelectHomework from './RegionSelectHomework.vue';
import FormExample from './FormExample';
import FormExampleVModel from './FormExampleVModel';

export default {
  components: {
    RegionSelect,
    RegionSelectHomework,
    FormExample,
  },
  data: () => ({
    examples: {
      RegionSelect,
      RegionSelectHomework,
      FormExample,
      FormExampleVModel,
    },
    currentComponent: null,
  }),
};
</script>

<template>
  <div id="app">
    <div class="container">
      <div class="row pt-3">
        <div
          v-for="(value,key) in examples"
          :key="key"
          class="col"
        >
          <button
            class="btn btn-primary w-100"
            :class="{active:currentComponent===value}"
            @click="currentComponent=value"
          >
            {{ key }}
          </button>
        </div>
      </div>
      <Component :is="currentComponent" />
    </div>
  </div>
</template>

<style lang="scss">


@keyframes donutSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
h2{
  font-size: 30px;
  margin-top: 0;
}
h4{
  margin-top: 0;
}


section.loading::after{
  display: block;
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000088;
}

section.loading::before{
  position: absolute;
  content: '';
  display: inline-block;
  border: 4px solid white;
  border-color: white;
  border-left-color: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
  animation: donutSpin 1.2s linear infinite;
}

select {
  height: 30px;
}
</style>
