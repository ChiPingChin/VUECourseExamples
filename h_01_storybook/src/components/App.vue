
<script>
import MyButton from './MyButton';
import Checkbox from './Checkbox';

export default {
  name: 'App',
  components: {
    MyButton,
    Checkbox,
  },
};
</script>

<template>
  <div id="app">
    <MyButton text="我是Button" />
    <Checkbox label="點我" />
  </div>
</template>

