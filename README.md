# Node.js examples, demos and tests just as reference and doc

## Install node and npm

To install node in Ubuntu [click here](http://goo.gl/5FrHg)

For other platforms [click here](http://goo.gl/SWiTb)

## Setup your debugging environment

`npm install node-inspector` (and optional `npm install v8-profiler`) will install
the [node-inspector](http://goo.gl/mQfeA) module,
perfect for step-by-step debug of node.js programs

Now run `node-inspector &` and start your node app as `node --debug-brk app.js`; open
the page `http://127.0.0.1:8080/debug?port=5858` on a webkit-based browser
and see the magic

