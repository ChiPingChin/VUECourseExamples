console.log('------------------------------');

class WebpackClass{
  constructor(){
    console.log('WebpackClass constructor');
  }
  foo(){
    console.log('foo');
  }
}
const message = 'hi webpack';
console.log(message);

var r = new WebpackClass();
r.foo();