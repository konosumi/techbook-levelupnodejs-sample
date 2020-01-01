const fs = require('fs');

// ファイル読み込み(Input)を実行する
fs.readFile(__dirname + '/data.txt', 'utf8', (err, data) => {
  // ファイル読み込み完了後に、遅れて実行されます
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString('utf-8'));
});

console.log('プログラムはファイル読み込みで止まらず、先に進みます');