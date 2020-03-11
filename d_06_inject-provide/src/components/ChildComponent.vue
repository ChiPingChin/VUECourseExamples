<script>
export default {
  inject: ['foo', 'myProvide', 'appMethod'],
};
</script>

<template>
  <section data-name="ChildComponent.vue">
    <p>inject foo:{{ foo }}</p>
    <p>inject myProvide:{{ myProvide }}</p>
    <button @click="appMethod('hi 9527')">
      Call inject appMethod
    </button>
  </section>
</template>
