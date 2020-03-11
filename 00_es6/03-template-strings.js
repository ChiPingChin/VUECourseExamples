console.log('--- 03-template-strings');
var name = 'milkmidi';
var classes = 'React Vue';
console.log(name + '_' + classes);
console.log(`${name}_${classes}`);

var multiLine = `
  <div>
    <h1>1</h1>
    <h2>${name}</h2>
  </div>
`