function addPromise(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Fail addPromise.')), 100);
    }); 
  }
  
  async function asyncAwaitExec() {
    // UnhandledPromiseRejectionWarning: ...
    let num = await addPromise(0);
    num = await addPromise(num);
    num = await addPromise(num);
    num = await addPromise(num);
    console.log(num);
  }
  
  // 関数の外側でtry〜catchをしても上手くいきません
  try {
    asyncAwaitExec();
  } catch(error) {
    // ここには来ません
    console.error(error);
  }