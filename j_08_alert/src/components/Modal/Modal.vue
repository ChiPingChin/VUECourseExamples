<script>

export default {
  name: 'Modal',
  props: {
    component: {
      type: [Object],
      required: true,
    },
    componentProps: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    document.addEventListener('keyup', this.keyupHandler);
    this.$nextTick(() => {
      this.isActive = true;
    });
  },
  beforeDestroy() {
    console.log('beforeDestroy');
    document.removeEventListener('keyup', this.keyupHandler);
  },
  methods: {
    closeHandler() {
      this.isActive = false;
      setTimeout(() => {
        this.$emit('close');
      }, 150);
    },
    keyupHandler({ keyCode }) {
      if (keyCode === 27) {
        this.closeHandler();
      }
    },
  },
};
</script>

<template>
  <transition name="zoom-out">
    <div
      v-if="isActive"
      class="modal-component"
      @click.self="closeHandler"
    >
      <div class="modal-component__content">
        <component
          :is="component"
          v-bind="componentProps"
          @close="closeHandler"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.zoom-out-enter-active,
.zoom-out-leave-active {
  transition: opacity 150ms ease-out;
}
.zoom-out-enter-active .modal-component__content,
.zoom-out-leave-active .modal-component__content {
  transition: transform 150ms ease-out;
}
.zoom-out-enter,
.zoom-out-leave-active {
  opacity: 0;
}
.zoom-out-enter .modal-component__content,
.zoom-out-leave-active .modal-component__content {
  transform: scale(1.05);
}

.modal-component {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 9999;
  background-color: rgba(10, 10, 10, 0.6);
}
</style>
