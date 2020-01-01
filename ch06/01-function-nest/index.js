function add(num, callback) {
  setTimeout(() => {
    callback(num + 1); 
  }, 100);
}

// 工夫：一定単位でコールバックを関数にまとめてみる
function addTwice(num, callback) {
  add(num, (num) => {
    add(num, (num) => {
      callback(num);
    });
  });
}
 
// ネスト量が半分の2段になった
addTwice(0, (num) => {
  addTwice(num, (num) => {
    console.log(num); // 4
  }); 
});
