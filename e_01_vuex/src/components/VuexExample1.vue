<script>
import Vuex from 'vuex';

export default {
  computed: {
    ...Vuex.mapState(['count', 'loading']),
    ...Vuex.mapGetters(['userName']),
  },
  methods: {
    ...Vuex.mapMutations(['setCount']),
    ...Vuex.mapActions(['actionCount', 'fetchUserData']),

    fetchUserDataHandler() {
      this.fetchUserData().then((userData) => {
        console.log(userData);
      });
    },
  },
};
</script>

<template>
  <section
    data-name="VuexExample1"
    class="style-1"
  >
    <button @click="setCount(1)">mutationCount</button>
    <button @click="actionCount(9527)">actionCount</button>
    <button @click="fetchUserDataHandler">fetchUser</button>
    <p>count:{{ count }}</p>
    <p>userName:{{ userName }}</p>
    <div
      v-show="loading"
      class="loading"
    >
      Loading
    </div>
  </section>
</template>

<style scoped>
.loading{
  background-color: red;
}
</style>
