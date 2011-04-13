console.log('http://nodejs.org/docs/v0.4.5/api/http.html#http.request');

var http=require('http'), url=require('url');
var u=url.parse(process.argv.length>2?process.argv[2]:'http://www.delicious.com/straps');

console.dir(u);

var options = {
	host: u.host,
	port: u.port||80,
	path: u.pathname||'/'
};

console.dir(options);

http.get(options, function(res) {
	var body='', title='';
	res.on('data', function (chunk) {
		body+=chunk;
		if (!title && /<title>.*<\/title>/im.test(body)){
			console.log('data arrived, testing...');
			title=body.match(/<title>(.*)<\/title>/im)[1];
		}
	});
	res.on('end', function(){
		console.log('title: '+unescape(title));
	});
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});