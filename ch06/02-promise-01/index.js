function addPromise(num) {
  // 非同期処理が完了したらresolveをコールし、
  // 非同期処理内でエラーが発生したらrejectをコールする
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        // 非同期処理が完了したのでPromiseを解決する
        resolve(num + 1); 
    }, 100);
  });
}
 
// Promiseのthenによる連結
// (num)に渡される値はresolve(num + 1)によって提供されます。
addPromise(0).then((num) => {
  return addPromise(num);
}).then((num) => {
  return addPromise(num);
}).then((num) => {
  return addPromise(num);
}).then((num) => {
  console.log(num); // 4
});