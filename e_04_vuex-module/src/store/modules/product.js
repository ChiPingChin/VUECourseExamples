const moduleProductUser = {
  namespaced: true,
  state: {
    list: [
      {
        id: 'fakeId0', name: 'product0',
      },
      {
        id: 'fakeId1', name: 'product1',
      },
    ],
  },
  mutations: { },
  actions: {
    fetchProduct() {
      console.log('fetchProduct');
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('complete');
        }, 1000);
      });
    },
  },
  getters: { },
};
export default moduleProductUser;
