console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 39:00\n');
console.log('npm install connect');

var connect=require('connect');
connect.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hello World');
}).listen(8080);
