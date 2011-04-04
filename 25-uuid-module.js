console.log('Useful UUID module: https://github.com/broofa/node-uuid');
console.log('npm install node-uuid\n');

var uuid=require('node-uuid');
console.log('uuid generated: '+	uuid());
console.log('UUID+time: '+uuid()+'-'+(new Date().getTime()));