<script>
import Vuex from 'vuex';
import Loading from './Loading.vue';


export default {

  components: {
    Loading,
  },
  computed: {
    // method 1
    ...Vuex.mapState(['loading']),
    // method 2
    ...Vuex.mapState('user', {
      name: 'name',
    }),
    // method 3, 個人推這個寫
    ...Vuex.mapState({
      age: (state) => state.user.age,
      product: (state) => state.product.list,
    }),
    // method 4
    computedMapStateName() {
      return this.$store.state.user.name;
    },
  },
  methods: {
    ...Vuex.mapMutations({
      setUser: 'user/setUser',
      setLoading: 'setLoading',
    }),
    async clickHandler() {
      this.setUser({ name: '奶綠茶', age: 38 });

      //
      this.setLoading(true);

      const result = await this.$store.dispatch('product/fetchProduct');
      console.log(result);
      this.setLoading(false);
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <Loading />
      <h1>hi vuex</h1>
      <p>state.loading: {{ loading }}</p>
      <p>state.user.name:{{ name }}</p>
      <p>computedMapStateName:{{ computedMapStateName }}</p>
      <p>state.user.age:{{ age }}</p>
      <p>state.product.list:{{ product }}</p>
      <button @click="clickHandler">SetUser</button>
    </div>
  </div>
</template>

<style lang="scss">
#app{
  font-size: 150%;
}
</style>
