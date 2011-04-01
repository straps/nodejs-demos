console.log('ry video http://goo.gl/cJEIg');

var exec=require('child_process').exec;

exec('ls /', function(err,out){
	if (err) throw err
	console.log(out);
});