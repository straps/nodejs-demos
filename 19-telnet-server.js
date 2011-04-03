console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 32:00\n');
console.log('test:\ntelnet localhost 8000\n on multiple shells to chat in realtime over socket');

var net=require('net'), people=[];
var s=net.createServer(function(socket){
	socket.write('welcome to the chat\n');

	people.push(socket);
	socket.on('data',function(data){
		people.forEach(function(person){
			if (person!==socket && person.writable){
				person.write(person.remoteAddress+'>'+data);
			}
		});
	});
});
s.listen(8000);