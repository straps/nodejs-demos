console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 09:40\n');

var dns=require('dns'),
	domain=process.argv.length>2?process.argv[2]:'google.it';

dns.resolve('google.com', function(err, addresses){
	if (err) throw err;
	console.log('domain %s resolved in', domain);
	console.dir(addresses);
});
