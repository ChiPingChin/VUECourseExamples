var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    count: 0,
  },
  computed:{
    // computed 會 catched
    reversedMessage(){
      console.log('computed reversedMessage');
      return this.message.split('').reverse().join('')
    },
    countDouble(){
      return this.count * 2;
    }
  },
  methods:{
    add(){
      this.message += this.message.substr(this.count , 1);
      this.count += 1;
    },
    // 每次都會重新執行
    reverseMessage () {
      console.log('methods reversedMessage()');
      return this.message.split('').reverse().join('')
    }
  }
});