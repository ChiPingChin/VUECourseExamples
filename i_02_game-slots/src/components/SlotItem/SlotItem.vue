<script>
export default {
  props: {
    id: Number,
    index: Number,
    currentPointIndex: Number,
  },
  data() {
    return {
      img: require(`img/image${this.id}.png`),
      imgFocus: require(`img/image${this.id}_f.png`),
    };
  },
  computed: {
    isMatch() {
      return this.index === this.currentPointIndex;
    },
  },
  mounted() {
  },
  beforeDestroy() {
  },
};
</script>

<template>
<div class="slot-item" :class="{on:isMatch}">
  <div class="debug-text">{{index}}</div>
  <img :src="img" alt="" />
  <img :src="imgFocus" alt="" class="slot-item-img-focus" />
</div>
</template>

<style lang="scss" scoped>
.slot-item{
  position: relative;
  .debug-text{
    position: absolute;
    top: 5px;
    left: 5px;
    background-color:black;
    z-index: 5;
  }
  img{
    width: 100%;
    height: auto;
  }
  .slot-item-img-focus{
    position: absolute;
    top: 0;
    left:0;
    visibility: hidden;
  }
  &.on{
    border: 2px solid red;
    .slot-item-img-focus{
      visibility: visible;
    }
  }
}
</style>
