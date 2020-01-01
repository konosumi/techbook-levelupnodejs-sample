const fs = require('fs');

(async () => {
  try {
    const stream = fs.createReadStream(__dirname + '/data.txt', 'utf8');

    for await (const data of stream) {
      console.log(data);
    }
  } catch(error) {
    console.error(error);
  }
})();
