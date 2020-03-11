/* eslint no-param-reassign:0, no-shadow:0 */
import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const state = {
  count: 0,
  loading: false,
  user: null,
};
const mutations = {
  setCount(state, value) {
    state.count = value;
  },
  setUser(state, value) {
    state.user = value;
  },
  setLoading(state, value) {
    state.loading = value;
  },
};
const actions = {
  actionCount(context, value) {
    console.log('actionCount', value);
    context.commit('setCount', value);
  },
  fetchUserData(context) {
    console.log('fetchUserData');
    context.commit('setLoading', true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const newUserData = {
          name: '奶綠茶',
          age: 10,
        };
        context.commit('setLoading', false);
        context.commit('setUser', newUserData);
        resolve(newUserData);
      }, 1000);
    });
  },
};
const getters = {
  userName(state) {
    if (state.user) {
      return state.user.name;
    }
    return '';
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
