console.log('ry video http://goo.gl/j2pGo');

setInterval(function(){
	console.log('hello');
}, 1000);

process.on('SIGINT', function(){
	console.log('bye');
	process.exit(0);
});