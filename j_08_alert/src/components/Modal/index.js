import Vue from 'vue';
import Modal from './Modal.vue';

const ModalComponent = Vue.extend(Modal);

export function open(component: Object, componentProps = {}) {
  return new Promise((resolve) => {
    const propsData = {
      component,
      componentProps,
    };

    const modal = new ModalComponent({
      el: document.createElement('div'),
      propsData,
    });
    document.body.appendChild(modal.$el);
    modal.$once('close', (...args) => {
      modal.$destroy();
      document.body.removeChild(modal.$el);
      resolve(...args);
    });
  });
}
