function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 1), 100);
  });
}

// awaitにより待ち受けをするasync関数の宣言
async function asyncAwaitExec() {
    // awaitによってPromiseの完了を待つ
    let num = await addPromise(0);
    num = await addPromise(num);
    num = await addPromise(num);
    num = await addPromise(num);
    console.log(num); // 4
}

// async関数の実行
asyncAwaitExec();