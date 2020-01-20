
const http = require('http');

/**
 * HTTPクライアント
 */
// HTTPSを指定するとエラーとなる点に注意が必要です
//TypeError [ERR_INVALID_PROTOCOL]: Protocol "https:" not supported. Expected "http:"
//http.get('https://example.com', (res) => {
http.get('http://example.com', (res) => {
    res.setEncoding('utf8');
    res.on('data', function(body) {
       console.log(body);
    });
});
 
/**
 * HTTP・サーバー
 */ 
http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world \n');
}).listen(8000);
