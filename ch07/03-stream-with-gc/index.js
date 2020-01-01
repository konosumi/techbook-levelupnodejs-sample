// Execute like a node --expose-gc index.js
const fs = require('fs');

function showMemoryUsage() {
  const used = process.memoryUsage();
  const messages = [];
  for (let key in used) {
    messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`)
  }
  console.log('Memory:', messages.join(', '));
}

fs.createReadStream(__dirname + '/data.txt', 'utf8')
  .on('data', data => {
    // [追加]ガベージコレクションを実行する
    global.gc();

    // console.log('Read byteLength:', Buffer.byteLength(data));
    showMemoryUsage();
  }).on('end', () => {
    console.log('end.');
  }).on('error', err => {
    console.error(err);
  });