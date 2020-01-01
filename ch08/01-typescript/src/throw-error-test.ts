import 'source-map-support/register';
// または require('source-map-support').install();
import http = require('http');

const server = http.createServer();
server.on('request',function(_req, res) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('Hello world\n');
    res.end();
})

throw new Error("test");
// server.listen(8080);
