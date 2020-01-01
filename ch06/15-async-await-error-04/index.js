function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Fail addPromise.')), 100);
  }); 
}

async function asyncAwaitExec() {
  let num = await addPromise(0);
  num = await addPromise(num);
  console.log(num);
}

// asyncの戻り値がPromiseであることを利用する
asyncAwaitExec().catch((error) => {
  console.log('Promise内で発生した例外を捕捉するため、ここに到達します');
  console.error(error);
});

// もしくはasync/awaitして同期的な実行に変換し、try〜catchする
(async () => {
  try {
    await asyncAwaitExec();
  } catch(error) {
    console.log('awaitによってtry〜catchを抜けないため、ここに到達します');
    console.error(error);
  }
})();
