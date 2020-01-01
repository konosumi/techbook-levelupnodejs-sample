import http = require('http');
// import http from 'http';

const server = http.createServer();
server.on('request',function(_req, res) {
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('Hello world\n');
    res.end();
})

server.listen(8080);
