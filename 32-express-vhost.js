console.log('https://gist.github.com/750032');
console.log('npm install express logging');

var log=require('logging').from(__filename);

var express = require('express'),
   site1 = express.createServer(),
   site2 = express.createServer(),
   site_vhosts = [],
   vhost;

site_vhosts.push(express.vhost('localhost', site1));
site_vhosts.push(express.vhost('127.0.0.1', site2));

vhost = express.createServer.apply(this, site_vhosts);

site1.listen(8080);
site2.listen(9090);

site1.get('/', function(req,res){
  log(req.headers);
  res.send('site1 ready');
});
site2.get('/', function(req,res){
  log(req.headers);
  res.send('site2 ready');
});

vhost.listen(3000);

log('site1 listening on ', 8080);
log('site2 listening on ', 9090);

log('vhost listening on ', 3000);
log('Goto to http://localhost:3000 and http://127.0.0.1:3000 to see what happens');
