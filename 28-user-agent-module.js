console.log('User-Agent string parser https://github.com/visionmedia/user-agent.js');
console.log('npm install user-agent\n');

var userAgent = require('user-agent');
var ua='Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8';

console.log(ua);
console.dir(userAgent.parse(ua));