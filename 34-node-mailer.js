console.log('https://github.com/Marak/node_mailer');
console.log('npm install mailer logging');
console.log('Requires a local smtp server, works well with postfix on ubuntu linux');

var log=require('logging').from(__filename);
var email=require('mailer');

if (process.argv.length===6){
  var from=process.argv[2], to=process.argv[3], subj=process.argv[4], msg=process.argv[5];
  
  email.send({
    host : "localhost",              // smtp server hostname
    port : "25",                     // smtp server port
    to : to,
    from : from,
    subject : subj,
    "content-type": "text/html",
    body: msg
  },function(err, result){
    if(err){ log(err); }
  });
  
}else{
  log('Usage: node '+__filename+' from to subject message');
}
