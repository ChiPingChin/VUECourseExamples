<script>

export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    loading() {
      return this.$store.state.loading;
    },
    userName() {
      return this.$store.getters.userName;
    },
  },
  methods: {
    setCount(val) {
      this.$store.commit('setCount', val);
    },
    actionCount(val) {
      this.$store.dispatch('actionCount', val);
    },
    fetchUserData() {
      return this.$store.dispatch('fetchUserData');
    },
    fetchUserDataHandler() {
      this.fetchUserData().then((userData) => {
        console.log(userData);
      });
    },
  },
};
</script>

<template>
  <section data-name="VuexExample2">
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
