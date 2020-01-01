function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Fail addPromise.')), 100);
  }); 
}

addPromise(0).then(
  // 第1引数：正常系コールバック(resolveされた)
  (num) => addPromise(num),
  // 第2引数：エラー系コールバック(rejectされた)
  (error) => {
    console.error('Catch error1!', error);
    // 後続のthen()のためにPromiseが必要ですが、正常系を実行されたくないのでrejectされたPromiseを返します
    return Promise.reject(error);
  }
).then(
  (num) => addPromise(num),
  (error) => {
    // thenに渡されたPromiseはrejectされているので、エラー系ルートに分岐します
    console.error('Catch errorr2!', error);
  }
);