const { performance } = require('perf_hooks');

const startTime = performance.now();

// 計測する処理
let i = 1;
for (let i = 0; i < 100000; i++) {
    i = i+ 1;
}

// 何ミリ秒かかったのかを表示する
const endTime = performance.now();
console.log(endTime - startTime);
