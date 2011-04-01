console.log('ry video http://goo.gl/65oBe');

var spawn=require('child_process').spawn,
	cat=spawn('cat');

cat.stdin.write('hello');

setTimeout(function(){
	cat.stdin.end('bye');
}, 2000);

cat.stdout.on('data',function(d){
	console.log('received data on stdout: '+d);
});
