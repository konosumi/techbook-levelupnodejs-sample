const fs = require('fs');

try {
  fs.readFile(__dirname + '/notfound.txt', 'utf8', (err, data) => {
    console.log('コールバックは遅延実行されます。');
    // Error: ENOENT: no such file or directory
    if (err) {
      throw err;
    }
  });
} catch(error) {
  // fs.readFile()のコールバック内で発生した例外を、ここでは捕捉できない
  console.log('Catch error!');
}

console.log('コールバックの完了を待たず、先にtry〜catchを抜けます。');