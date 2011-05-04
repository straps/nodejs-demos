console.log('https://github.com/mishoo/UglifyJS');
console.log('npm install uglify-js logging');

var fs=require('fs'), ugly=require("uglify-js"), log=require('logging').from(__filename);

var js=fs.readFileSync(__filename).toString();

log('Compressing file: '+__filename);

log('Original ('+js.length+' bytes): \n'+js);

var ast = ugly.parser.parse(js);  // parse code and get the initial AST
ast = ugly.uglify.ast_mangle(ast, {toplevel:false}); // get a new AST with mangled names
ast = ugly.uglify.ast_squeeze_more(ast); // get an AST with compression optimizations

var ujs=ugly.uglify.gen_code(ast);
log('Uglified: ('+ujs.length+' bytes - ratio: '+(100-(ujs.length/js.length*100)).toFixed(1)+'%)\n'+ujs);

