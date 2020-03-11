<script>
import Vuex from 'vuex';

export default {
  computed: {
    ...Vuex.mapState(['loading']),
  },
};
</script>

<template>
  <div
    v-show="loading"
    class="loading-wrap"
  >
    <div class="loading-component loading" />
  </div>
</template>

<style lang="scss" scoped>
.loading-wrap{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
@keyframes donutSpin {
  0% { transform: rotate(0deg);}
  100% { transform: rotate(360deg);}
}
.loading-component {
  position:relative;
  width: 100%;
  height: 100%;
  &:before{
    display: inline-block;
    border: 10px solid black;
    border-color: primaryColor;
    border-left-color: transparent;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: donutSpin 1.2s linear infinite;
    z-index: 5;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    visibility: hidden;
  }
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255,255,255,0.5);
    visibility: hidden;
    opacity: 0;
  }
  &.loading {
    &:before, &:after {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>
