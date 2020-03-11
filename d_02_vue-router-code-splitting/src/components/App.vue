<script>
import Menu from './Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <Menu />
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
