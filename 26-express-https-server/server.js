console.log('http://expressjs.com/guide.html#creating-an%20https%20server'+__dirname);
console.log('Certificate creation instructions: '+__dirname+'/cert/create_certificate.sh');

var fs=require('fs'),
	key=fs.readFileSync(__dirname+'/cert/server.key'),
	cert=fs.readFileSync(__dirname+'/cert/server.crt'),
	app=require('express').createServer({key:key, cert:cert});

app.get('/', function(req, res){
	res.send('express https configured');
});

app.listen(443);