console.log('Instructions on http://nodecasts.org/ episode 2, sources https://github.com/nodecasts/episode2');
console.log('Point your browser to http://localhost:8000/client.html');

var express = require('express'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});

var app = express.createServer();
app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

app.post('/message', function(req, res) {
  bayeux.getClient().publish('/channel', {text: req.body.message});
  res.send(200);
});

bayeux.attach(app);
app.listen(8000);