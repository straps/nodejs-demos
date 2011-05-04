console.log('https://github.com/technoweenie/twitter-node');
console.log('npm install twitter-node logging');
console.log('Requires a .twitter-auth containing username:password to work; create it before launch');


var log=require('logging').from(__filename);

log('Insert the search term below; supports OR construct, ie: "Obama OR Osama"');
process.stdout.write('Search Term: ');

process.stdin.resume(); 
process.stdin.on('data', function (term) { 
  term=''+term;
  if (term){
    log('Monitoring Twitter For: '+term);
    
    var credentials=require('fs').readFileSync(__dirname+'/.twitter-auth').toString().split(':');
    var TwitterNode=require('twitter-node').TwitterNode;
        twit = new TwitterNode({
          user: credentials[0], 
          password: credentials[1].replace('\n',''),
          track: term.split(' OR ')
        });
    twit.headers['User-Agent'] = 'node.js-strx';
    twit.addListener('error', function(error) {
      log(error);
    });
    twit.addListener('tweet', function(tweet) {
        log("@" + tweet.user.screen_name + ": " + tweet.text);
    });
    twit.stream();
    
  }else{
    console.log('Search term not valid');
    process.exit(1);
  }
});
