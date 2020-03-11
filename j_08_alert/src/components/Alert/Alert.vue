<template functional>
  <div class="alert-component">
    <h1>{{ props.message }}</h1>
    <button
      class="btn btn-info w-50"
      @click="listeners.close"
    >
      ok
    </button>
  </div>
</template>

<style lang="scss">
.alert-component{
  background: white;
  width: 400px;
  padding: 15px;
  text-align: center;
}
</style>
