console.log('ry video http://goo.gl/HysSU');

var spawn=require('child_process').spawn,
	pump=require('sys').pump;

var cat=spawn('cat');
cat.stdin.write('hello ');


setTimeout(function(){
	cat.stdin.end('bye\n');
}, 2000);

pump(cat.stdout, process.stdout);