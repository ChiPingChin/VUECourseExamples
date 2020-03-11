export default {
  props: {
    permissionCode: {
      type: Number,
      required: true,
    },
  },
  render() {
    if (this.permissionCode !== 1) {
      return null;
    }
    return this.$slots.default;
  },
};
