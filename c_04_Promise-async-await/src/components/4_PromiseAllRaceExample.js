console.log('%c PromiseExample ', 'background: #e67e22; color: white');
function delay(name, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, time);
  });
}
function init() {
  Promise.all([
    delay('all 1', 1000),
    delay('all 2', 2000),
    delay('all 3', 1500),
  ])
    .then((results) => {
      console.log(results);
    });

  Promise.race([
    delay('race 1', 1000),
    delay('race 2', 2000),
    delay('race 3', 1500),
  ])
    .then((result) => {
      console.log(result);
    });
}

init();
