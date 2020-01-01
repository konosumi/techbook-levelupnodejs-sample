const fs = require('fs');

// メモリ使用量を出力する
function showMemoryUsage() {
  const used = process.memoryUsage();
  const messages = [];
  for (let key in used) {
    messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`)
  }
  console.log('Memory:', messages.join(', '));
}

// ファイル読み込みストリームの作成
// 注釈：大容量のdata.txtはご自身で用意をお願い申し上げます
fs.createReadStream(__dirname + '/data.txt', 'utf8')
  .on('data', data => {
    // ストリーム経由で到着したデータ量
    console.log('Read byteLength:', Buffer.byteLength(data));

    showMemoryUsage();
  }).on('end', () => {
    console.log('end.');

    showMemoryUsage();
  }).on('error', err => {
    console.error(err);
  });
