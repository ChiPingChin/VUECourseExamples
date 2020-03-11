const moduleUser = {
  namespaced: true,
  state: {
    name: 'milkmidi',
    age: 18,
  },
  mutations: {
    setUser(state, { name, age }) {
      state.name = name;
      state.age = age;
    },
  },
  actions: { },
  getters: { },
};
export default moduleUser;
