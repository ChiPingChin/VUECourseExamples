console.log('%c PromiseExample ', 'background: #3498db; color: white');
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

export function init() {
  delay('Resolve 1')
    .then((result) => {
      console.log(result);
      return delay('Resolve 2');
    })
    .then((result) => {
      console.log(result);
      return delay('Resolve 3');
    })
    .then(() => {
      console.log('Resolve complete');
    });
}
init();

export function rejectExample() {
  // ----------------------------- reject
  delay('Reject 1')
    .then((result) => {
      console.log(result);
      return throwError();
    })
    .then((result) => {
      console.log(result);
      return delay('3');
    })
    .catch((error) => {
      console.log(error.message);
    });
}
rejectExample();
