/* eslint no-param-reassign:0 */
import Vuex,
{
  StoreOptions,
  MutationTree,
  ActionTree,
  GetterTree,
} from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

type StateType = {
  user : {
    name: string;
    email: string;
  }
}

const defaultState = {
  user: null,
};

const mutations:MutationTree<StateType> = {
  setUser(state, value) {
    state.user = value;
  },
};

const actions:ActionTree<StateType> = {
  login(context, payload) {
    console.log('login', payload);

    return new Promise((resolve) => {
      setTimeout(() => {
        const newUserData = {
          name: '奶綠茶',
          email: 'milkmidi@gmail.com',
        };
        context.commit('setUser', newUserData);
        resolve(newUserData);
      }, 1000);
    });
  },
};

const getters:GetterTree<StateType> = {
  userName(state):string {
    return state.user.name;
  },
  isLogin(state):boolean {
    return !!state.user;
  },
};


const store: StoreOptions<StateType> = {
  state: defaultState,
  getters,
  actions,
  mutations,
};

export default new Vuex.Store(store);
