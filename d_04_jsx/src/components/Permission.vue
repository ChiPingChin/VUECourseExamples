<script>
export default {
  props: {
    permissionCode: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div v-if="permissionCode === 1">
    <slot />
  </div>
</template>
