<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  computed: {
    innerModel: {
      set(v:string[]) {
        this.$emit('input', v);
      },
      get():string[] {
        return this.value;
      },
    },
  },
};
</script>

<template>
  <div class="block">
    <h4>checkbox</h4>
    <label>
      <input
        v-model="innerModel"
        type="checkbox"
        value="學會Vue"
      >學會React
    </label>
    <label>
      <input
        v-model="innerModel"
        type="checkbox"
        value="年薪百萬"
      >年薪百萬
    </label>
    <label>
      <input
        v-model="innerModel"
        type="checkbox"
        value="早點下班"
      >早點下班
    </label>
    <p>{{ value }}</p>
  </div>
</template>
