console.log('ry video http://goo.gl/Yy2wX');
console.log('https://github.com/mranney/node_pcap');
console.log('sudo apt-get install libpcap-dev');
console.log('npm install pcap');

var pcap=require('pcap'),
	session=pcap.createSession('wlan2', 'tcp dst port 80');

session.addListener('packet', function(raw_packet){
	console.log('packet received');
	var packet = pcap.decode.packet(raw_packet);

	console.dir(packet);
});