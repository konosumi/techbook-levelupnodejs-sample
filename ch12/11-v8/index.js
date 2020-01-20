const v8 = require('v8');

// testという文字列をシリアライズしてみる
const s =  v8.serialize('test') ;
console.log('serialized:', s );
// erialized: <Buffer ff 0d 22 04 74 65 73 74>

// シリアライズをもとに戻す
console.log('deserialized:', v8.deserialize(s) );
// deserialized: test
