import Vue from 'vue';

import MyButton from './components/MyButton.vue';
import Countdown from './components/Countdown.vue';

export * from './utils/flatpickrUtil';
export * from './utils';

Vue.component('MyButton', MyButton);
Vue.component('Countdown', Countdown);
