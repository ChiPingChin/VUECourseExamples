<script>
const digi = (value:number):string => (value < 10 ? `0${value}` : `${value}`);

export default {
  props: {
    value: Number,
  },
  data: (vm) => ({
    time: vm.value,
  }),
  computed: {
    displayTime():string {
      const min = Math.floor(this.time / 60);
      const sec = this.time % 60;
      return `${digi(min)}:${digi(sec)}`;
    },
  },
  watch: {
    value(val:string) {
      this.time = val;
    },
  },
  mounted() {
    if (Number.isNaN(this.value)) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.time -= 1;
      if (this.time <= 0) {
        this.stop();
        this.$emit('complete');
      }
    }, 1000);
  },
  beforeDestroy() {
    this.stop();
  },
  methods: {
    stop() {
      clearTimeout(this.intervalId);
      this.intervalId = -1;
    },
  },
};
</script>

<template>
  <div class="counterdown">
    <slot />
    <span>{{ displayTime }}</span>
  </div>
</template>

<style scoped>
.counterdown{
  color: red;
}
</style>
