<script>
import DebugComponent from '@/components/DebugComponent';

export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },
  render() {
    const TAG = `h${this.level}`;
    return (
      <section>
        <DebugComponent path="components/CustomTagJSX.vue" />
        <TAG>
          <b>{this.$slots.default}</b>
        </TAG>
      </section>
    );
  },
};
</script>
