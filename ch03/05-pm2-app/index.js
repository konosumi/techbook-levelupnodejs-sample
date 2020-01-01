// 事前に「npm install pm2 -g」してください

const express = require('express');                                                                                         
const app = express();
app.get('/', function (req, res) {
  res.send('Hello World ' + process.pid);
});

app.listen(8080);