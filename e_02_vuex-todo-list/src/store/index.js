/* eslint no-param-reassign:0, no-shadow:0 */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);


const state = {
  list: [
    {
      id: '0', text: '學會Vue', done: false,
    },
  ],
};

const mutations = {
  addTodo(state, value) {
    state.list.push({
      id: new Date().getTime().toString(),
      text: value,
      done: false,
    });
  },
  toggleTodo(state, value) {
    for (let i = 0; i < state.list.length; i += 1) {
      const item = state.list[i];
      if (item.id === value) {
        item.done = !item.done;
        break;
      }
    }
  },
};


const actions = {

};


const getters = {
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
