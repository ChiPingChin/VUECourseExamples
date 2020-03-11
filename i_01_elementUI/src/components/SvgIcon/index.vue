<template>
  <i class="icon" :class="iconName"></i>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return this.iconClass || '';
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  margin-right: 0.875rem;
  color: white;
}
</style>
