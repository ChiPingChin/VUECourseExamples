<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  render(h) {
    return h(
      'section',
      [
        h('DebugComponent', {
          attrs: {
            path: 'components/CustomTagRF.vue',
          },
        }),
        h(
          `h${this.level}`, // tag name
          this.$slots.default, // array of children
        ),
      ],
    );
  },
};
</script>
