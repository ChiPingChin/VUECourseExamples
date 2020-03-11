import Vue from 'vue';
// https://lodash.com/docs/4.17.15#uniq
import uniq from 'lodash/uniq';
import App from './components/App.vue';


import { add, testFun } from '@/utils';

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// TODO
// vanilla
document.getElementById('button').addEventListener('click', () => {
  // F10 Step Over, 直接下一行，不會進到函式裡
  // F11 Step into , 會進入到函式裡
  const result = add(1, 2);
  console.log(result);

  const resultTest = testFun(1, 2);
  console.log(resultTest);
});


document.getElementById('uniq-btn').addEventListener('click', () => {
  const source:number[] = [0, 0, 1, 1, 2, 2, 3, 3];
  const result:number[] = uniq(source); // 在 launch.json 新增 skipFiles lodash
  console.log(result);
});
