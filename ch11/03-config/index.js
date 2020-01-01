const config = require('config');

console.log('test.message1:', config.get('test.message1'));
console.log('test.message2:', config.get('test.message2'));
