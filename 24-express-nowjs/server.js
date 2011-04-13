var express=require('express'), app = express.createServer();
app.listen(8000);

var everyone = require("now").initialize(app);

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

app.post('/message', function(req, res) {
  everyone.now.onMsg(req.body.message);
  res.send(200);
});