
const https = require('https');

/**
 * HTTPSクライアント
 */
https.get('https://example.com', (res) => {
    res.setEncoding('utf8');
    res.on('data', function(body) {
       console.log(body);
    });
});
 
/**
 * HTTPSサーバー
 */ 
https.createServer({
    // HTTPSのサーバーでは、本来は事前に作成された証明書が必要です。
    // key: fs.readFileSync('credentiale-key.pem'),
    // cert: fs.readFileSync('credential-cert.pem')
}, (req, res) => {
    res.writeHead(200);
    res.end('hello world \n');
}).listen(8000);
