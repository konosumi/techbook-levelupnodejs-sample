function addPromise(num) {
  return new Promise((resolve, reject) => {
    // 関数の波括弧（{}）を省略した短縮記法
    setTimeout(() => resolve(num + 1), 100);
  });
}

/**
 * thenは新しいpromiseオブジェクトを返すため、ループで繰り返して連結する
 */
let promise = addPromise(0);
for (let i = 0; i < 3; i++) {
  // then()内の{ return addPromise(num); }は行数の節約で短縮記法にしています
  promise = promise.then((num) => addPromise(num));
}

// promiseの最後のthenでログに出力します
promise.then((num) => {
  console.log(num); // 4
});