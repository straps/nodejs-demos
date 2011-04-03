console.log('SenchaCon 2010: Server-side JavaScript with Node, Connect & Express http://vimeo.com/18077379 46:00\n');
console.log('npm install express');

var app=require('express').createServer();

app.get('/', function(req,res){
	res.send('Hello World');
});

app.listen(3000);