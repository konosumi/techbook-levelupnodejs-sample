function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 1), 100);
  });
}

// 無名のasync関数を生成（宣言）して、その場で実行する書き方
(async () => {
  let num = await addPromise(0);
  num = await addPromise(num);
  num = await addPromise(num);
  num = await addPromise(num);
  console.log(num); // 4
})(); // 無名関数の即時実行