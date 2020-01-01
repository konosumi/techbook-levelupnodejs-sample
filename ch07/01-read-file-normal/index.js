const fs = require('fs');

// ファイズサイズの確認
console.log('File size:', fs.statSync(__dirname + '/data.txt').size / 1024 / 1024, 'MB');

// 通常のdata.txtと、大容量のdata.txtを2つ用意します
// 注釈：大容量のdata.txtはご自身で用意をお願い申し上げます
fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
  // メモリ使用量を出力する
  const used = process.memoryUsage();
  const messages = [];
  for (let key in used) {
    messages.push(`${key}: ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`)
  }
  console.log('Memory:', messages.join(', '));
});