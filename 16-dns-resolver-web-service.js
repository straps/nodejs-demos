console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 12:30\n');
console.log('test: curl http://localhost:8000/google.it');

var dns=require('dns'),
	http=require('http');

var s=http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/plain'});

	var query=req.url.replace('/', '');
	dns.resolve(query,function(err, addresses){
		if (!err) {
			res.end(JSON.stringify(addresses)+'\n');
		}else{
			res.end(err.message);
		}
	});
});
s.listen(8000);

