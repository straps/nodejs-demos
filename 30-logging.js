console.log('https://github.com/dylang/logging');
console.log('npm install logging');

var log=require('logging').from(__filename);

log('hello world');

log('counter', 123);

log('global variables', global);

log(1, "2", [ 3, 4 ], { 5: 6 }, function() { return 7; });

