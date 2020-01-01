const co = require('co');                                                       

function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Fail addPromise.')), 100);
  }); 
}

co(function* () {
  try {
    // yieldによって一時停止するから、エラーはtry〜catch内で起きる
    let num = yield addPromise(0);
    num = yield addPromise(num);
    num = yield addPromise(num);
    num = yield addPromise(num);
    console.log(num);
  } catch(error) {
    // Error: Fail addPromise.
    console.error(error);
  }
});