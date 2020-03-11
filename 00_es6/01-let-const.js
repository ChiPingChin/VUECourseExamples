console.log('--- 01-let-const');

var myVar = 1;
myVar = 2;
console.log(myVar);

let myLet = 2;
myLet = 3;
console.log(myLet);


function foo(){
  var x = 0;
  {
    let x = 'foo';
    // var x = 'foo';
  }
  console.log('foo x:', x);


  for (let i = 0; i < 2; i++) {
    console.log(i);
  }
  console.log('i:'+i);  // Uncaught ReferenceError: i is not defined
}
foo();

const myConst = 3;
// myConst = 4;  // Error, const is ready-only
console.log(myConst);