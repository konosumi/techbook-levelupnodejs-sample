
const fs = require('fs');

// __filenameは自分自身のファイル名です
fs.readFile(__filename, (err, data) => {
    // ファイルの中身はバイナリ状態で格納されている
    // <Buffer 0a 63 6f 6e 73
    console.log(data);
});
