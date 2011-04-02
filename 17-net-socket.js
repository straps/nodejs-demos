console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 23:00\n');
console.log('test: telnet localhost 8000');

var net=require('net');
var s=net.createServer(function(socket){
	socket.end('goodby\n');
});
s.listen(8000);