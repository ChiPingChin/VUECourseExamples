var message = 'hi es6 module';
console.log(message);


function privateFun(){
  console.log('this is privet function');
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export function divide(a, b) {
  return a / b;
}

class MyClass {
  foo(){
    console.log('foo');
  }
}

export default MyClass;