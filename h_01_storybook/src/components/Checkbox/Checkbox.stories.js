import Vue from 'vue';

import Checkbox from '.';

Vue.component('Checkbox', Checkbox);

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export function basic() {
  return {
    template: '<Checkbox label="vue" />',
  };
}

export function disabled() {
  return {
    template: '<Checkbox label="vue" disabled/>',
  };
}

export function boolean() {
  return {
    data: () => ({
      selected: false,
    }),
    template: `
      <div>
        <p>{{selected}}</p>
        <Checkbox label="同意什麼東西" v-model="selected" />
      </div>
      `,
  };
}

export function multi() {
  return {
    data: () => ({
      list: ['react'],
    }),
    template: `
      <div>
        <p>{{list}}</p>
        <Checkbox label="vue" v-model="list" />
        <Checkbox label="react" v-model="list" />
        <Checkbox label="angular" v-model="list" />
      </div>
    `,
  };
}
