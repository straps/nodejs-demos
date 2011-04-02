console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 29:00\n');
console.log('test: open 2 shells; in the first launch\ntelnet localhost 8000\nin the second\ncurl http://localhos:8001\n\nwrite something in the first shell and see what happens in the second...');

var net=require('net'), http=require('http'), sockets=[];

var getSocket=function(){
	while(sockets.length){
		var s=sockets.shift();
		if (s.readable) { return s; }
	}
	return null;
};

var s=net.createServer(function(socket){
	sockets.push(socket);
});
s.listen(8000);

var h=http.createServer(function(req, res){
	var s=getSocket();
	if (s){
		s.pipe(res);
	}else{
		res.end('no socket available');
	}
});
h.listen(8001);