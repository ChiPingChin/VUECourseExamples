// https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYewdgzgLgBBIFcBOwCmMC8MDaBGANDAEyEDMAugNwBQ1okswANuKgMqIrpbYB0_8ZGirUA9KJgA3AIZIYzVhyHcc5XvWDSoACkFcAlDWoy5ITDADe1GDDDSAtqgBcMAOT2AlkwDWngCYervjWMNIA5s4wuAAc1AC-tOIwqBAArMayMCCp5hYJAGYgSNomoTAeYFn6VjYgpNjS5OYgDSIJYhIpAGwZpl25Ify8IME2EN5eTC7YrgBqCKhBbgBKqNLAUK7k8bSlIADsuQkA8gBGAFaoG7zSEBAeYWDaB4RmhBbjk04z84vkcYYgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015-loose&prettier=false&targets=&version=7.8.4&externalPlugins=%40babel%2Fplugin-proposal-class-properties%407.5.5


const source = [1, 2, 3];

const cloneSource = [...source];
// var cloneSource = [].concat(source);

var o = {
  name: 'milkmidi',
  age: 18
}

// es5
var o5 = {}
for(var a in o){
  o3[a] = o[a];
}

// es6
var o6 = {
  ...o,
  skill: ['Vue', 'React']
}

var o7 = {}
Object.assign(o7, o , {skill:['Vue']});



