console.log('ry video http://goo.gl/bJVaj');
console.log('https://github.com/creationix/step');
console.log('npm install step');

var fs=require('fs'),
	Step=require('step');


//Test reading a single file
Step (
	function readFiles(){
		fs.readFile('/etc/passwd', this);
	},
	function showFiles(err, f){
		if (err) throw err;
		console.log(f.toString());
	}
);

//Test reading 2 files in parallel
Step (
	function readFiles(){
		fs.readFile('/etc/passwd', this.parallel());
		fs.readFile(__filename, this.parallel());
	},
	function showFiles(err, f1, f2){
		if (err) throw err;
		console.log('file 1='+f1.toString());
		console.log('file 2='+f2.toString());
	}
);
