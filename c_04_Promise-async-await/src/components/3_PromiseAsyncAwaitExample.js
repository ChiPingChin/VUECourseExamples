// https://babeljs.io/docs/en/babel-plugin-transform-runtime
console.log('%c PromiseExample ', 'background: #34495e; color: white');
function delay(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
}
function throwError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('我是 Promise error 文字'));
    }, 1000);
  });
}

export async function init() {
  const result1 = await delay('resolve 1');
  console.log(result1);
  const result2 = await delay('resolve 2');
  console.log(result2);

  console.log('resolve complete');
}

export async function rejectExample() {
  try {
    const result1 = await delay('reject 1');
    console.log(result1);
    const result2 = await throwError();
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
}

init();
rejectExample();
