/* eslint no-param-reassign:0 */
import Vuex from 'vuex';
import Vue from 'vue';

import user from './modules/user';
import product from './modules/product';


Vue.use(Vuex);


const defaultState = {
  loading: false,
};

const mutations = {
  setLoading(state, value) {
    state.loading = value;
  },
};
const actions = {

};

const getters = {
};

export default new Vuex.Store({
  state: defaultState,
  getters,
  actions,
  mutations,
  modules: {
    user,
    product,
  },
});
