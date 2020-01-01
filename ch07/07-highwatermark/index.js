const fs = require('fs');

(async () => {
  try {
    const stream = fs.createReadStream(__dirname + '/data.txt', {
      highWaterMark: 131072,
      encoding: 'utf8'
    });

    for await (const data of stream) {
      console.log('Read byteLength:', Buffer.byteLength(data));
    }
  } catch (error) {
    console.error(error);
  }
})();