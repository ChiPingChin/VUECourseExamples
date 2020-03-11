<script>

import { open } from '@/components/Modal';
import Alert from '@/components/Alert';

export default {
  methods: {
    openAlert() {
      console.log('openAlert');
      open(Alert, { message: '我是傳進去的變數Hello world' }).then(() => {
        console.log('afterAlertdismiss');
      });
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <h1>hi</h1>
      <button
        class="btn btn-primary"
        @click="openAlert"
      >
        open
      </button>
    </div>
  </div>
</template>
