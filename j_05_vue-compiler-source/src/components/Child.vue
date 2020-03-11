<script>
export default {
  name: 'ChildVue',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <section data-name="Child.vue">
    <p>{{ name }}</p>
    <button @click="$emit('update:name', Math.random().toString())">
      button>
    </button>
  </section>
</template>
