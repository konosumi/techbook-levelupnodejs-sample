function addPromise(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Fail addPromise.')), 100);
    }); 
  }
  
  async function asyncAwaitExec() {
    // Error: Fail addPromise.
    await addPromise(0).catch((error) => console.error(error));
  }
  
  // async関数の実行
  asyncAwaitExec();