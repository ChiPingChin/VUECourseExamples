console.log('--- 02-destructuring');
var arr = [1, 2, 3];
var [a, b] = arr;
console.log(a, b);

var [, c] = arr;
console.log(c);

var obj = { 
  name: 'milkmidi',
  age: 18,
};
var {name , age} = obj;
console.log(name , age);

const myFun = function({name, age}){
  console.log(name, age);
}
myFun({name:'milkmidi', age:18});