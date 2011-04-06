console.log('Original Version: https://gist.github.com/555607');
console.log('Put your twitter consumer key and secret respectively in '+__dirname+'/27-files/twitterConsumerKey and '+__dirname+'/27-files/twitterConsumerSecret, then access http://localhost');
console.log('npm install express oauth');

var express = require('express'), app = express.createServer(),
	oauth = require('oauth'),
	fs = require('fs');

var auth={
	key:fs.readFileSync(__dirname+'/27-files/twitterConsumerKey'),
	secret:fs.readFileSync(__dirname+'/27-files/twitterConsumerSecret'),
	callback:"http://localhost/sessions/callback"
};

function consumer() {
	return new oauth.OAuth(
		"https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
		auth.key, auth.secret, "1.0A", auth.callback, "HMAC-SHA1");
}

app.get('/', function(req, res){
	res.send('<a href="/sessions/connect"><img src="http://si0.twimg.com/images/dev/buttons/sign-in-with-twitter-l.png"/></a>');
});

app.get('/sessions/connect', function(req, res){
	consumer().getOAuthRequestToken(function(err, oauthToken, oauthTokenSecret, results){
		if (err) throw err;
		auth.oauthRequestToken = oauthToken;
		auth.oauthRequestTokenSecret = oauthTokenSecret;
		res.redirect("https://twitter.com/oauth/authorize?oauth_token="+auth.oauthRequestToken);
	});
});

app.get('/sessions/callback', function(req, res){
	consumer().getOAuthAccessToken(auth.oauthRequestToken, auth.oauthRequestTokenSecret, req.query.oauth_verifier, function(err, oauthAccessToken, oauthAccessTokenSecret, results) {
		if (err) throw err;
		// Right here is where we would write out some nice user stuff
		consumer().get("http://twitter.com/account/verify_credentials.json", oauthAccessToken, oauthAccessTokenSecret, function (err, data, response) {
			if (err) throw err;
			data=JSON.parse(data);
			console.dir(data);
			res.send('You are signed in: ' + data.screen_name +'<br/><br>'+JSON.stringify(data));
		});
	});
});

app.listen(80);