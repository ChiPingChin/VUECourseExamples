console.log('%c CallbackHell ', 'background: #2ecc71; color: white');
function callback1(cb) {
  console.log('callback1');
  setTimeout(() => cb(), 1000);
}

function callback2(cb) {
  console.log('callback2');
  setTimeout(() => cb(), 1000);
}

function callback3(cb) {
  console.log('callback3');
  setTimeout(() => cb(), 1000);
}

callback1(() => {
  callback2(() => {
    callback3(() => {
      console.log('complete');
    });
  });
});
