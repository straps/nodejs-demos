console.log('ry video http://goo.gl/Lks7p');
console.log('https://github.com/agnat/node_mdns');
console.log('sudo apt-get install libavahi-compat-libdnssd-dev');
console.log('npm install mdns');

var browser=require('mdns').createBrowser('http', 'tcp');

browser.on('serviceUp', function(info){
	console.log('mDNS serviceUp '+info);
});
browser.on('serviceDown', function(info){
	console.log('mDNS serviceDown '+info);
});

browser.start();
