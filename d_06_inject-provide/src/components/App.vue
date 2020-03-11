<script>
import ChildComponent from './ChildComponent.vue';

export default {
  /* provide: {
    foo: 'bar123456789',
  }, */
  provide() {
    const myProvide = {};
    Object.defineProperty(myProvide, 'appSomeData', {
      enumerable: true,
      get: () => this.appSomeData,
    });
    return {
      myProvide,
      foo: 'bar',
      appMethod: this.appMethod,
    };
  },
  components: {
    ChildComponent,
  },
  data: () => ({
    appSomeData: 'milkmidi',
  }),
  methods: {
    appMethod(value:string) {
      this.appSomeData = value;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <section data-name="App.vue">
        <p>App.vue appSomeData:{{ appSomeData }}</p>
        <button @click="appSomeData='123'">
          set appSomeData
        </button>
        <ChildComponent />
      </section>
    </div>
  </div>
</template>
