// モジュールの読み込み
const os = require('os');                                                   
// CPUのコア数を取得する
const numCPUs = os.cpus().length;
// コンソールに出力する
console.log(numCPUs + ' core cpu.');