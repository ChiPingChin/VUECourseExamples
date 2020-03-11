import Vue from 'vue';

import { action } from '@storybook/addon-actions';

import MyButton from '.';

export default { title: 'MyButton' };

Vue.component('MyButton', MyButton);

export const basic = () => ({
  methods: {
    clickHandler() {
      action('Button')('click');
    },
  },
  template: `
          <MyButton text="MyButton" @click="clickHandler" />
      `,
});

export const round = () => ({
  methods: {
    clickHandler() {
      action('Button')('click');
    },
  },
  template: `
      <MyButton
        text="MyButton"
        :rounded="true"
        color="#ff0000"
        @click="clickHandler" />
  `,
});
