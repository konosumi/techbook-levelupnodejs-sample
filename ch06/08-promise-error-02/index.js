function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Fail addPromise.')), 100);
  }); 
}

addPromise(0).then((num) => {
  return addPromise(num);
}).then((num) => {
  console.log("ここは呼ばれない");
  return addPromise(num);
}).then((num) => {
  console.log("ここも呼ばれない");
  return addPromise(num);
}).catch((error) => {
  console.log("ここが呼ばれる");
  console.error('Catch error!', error);
});