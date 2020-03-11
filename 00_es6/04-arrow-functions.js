console.log('--- 04-arrow-functions');

function fun0(){
  console.log('fun0');
}

var fun = function(){
  console.log('fun');
};
var funArrow = () => {
  console.log('funArrow');
};

var add = (a, b)=> {
  return a + b;
}
var sub = (a, b)=> (a - b);

fun();
funArrow();



var o = {
  value: 0,
  foo0:function(){
    setTimeout(function(){
      console.log(this);  // window
    }, 100);
  },
  // es6 Object function 可以縮寫
  foo1(){
    var me = this;
    setTimeout(function(){
      console.log(me);  // window
    }, 100);
  },
  foo2(){
    setTimeout(()=>{
      console.log(this);  // o
    }, 100);
  }
}
o.foo0();
o.foo1();
o.foo2();
