const co = require('co');

function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 1), 100);
  });
}

// ジェネレーター関数はfunction* 構文を使用して記述されます。
co(function* () {
    // yieldによってPromiseの完了まで処理を一時停止する
    let num = yield addPromise(0);
    num = yield addPromise(num);
    num = yield addPromise(num);
    num = yield addPromise(num);
    console.log(num); // 4
});