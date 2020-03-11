var app = new Vue({
  el: '#app',
  data: {
    message: 'hi, vue',
    checked: false,
    checkedNames: [],
    gender: '',
    selected: ''
  },
  methods:{
    submitHandler(e){
      console.log(e);
      // e.preventDefault();  在 @submit.prevent 已經加了
      console.log('submitHandler');
      console.log(this.$data);  // 得到所有 data 裡的變數
    }
  }
});