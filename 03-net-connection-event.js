console.log('ry video http://goo.gl/5YC12');

var net=require('net'),
	s=net.createServer();

s.on('connection', function(c){
	c.end('hello');
});

s.listen(8000);