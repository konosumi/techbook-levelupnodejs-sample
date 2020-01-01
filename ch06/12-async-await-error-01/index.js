function addPromise(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Fail addPromise.')), 100);
    }); 
  }
  
  async function asyncAwaitExec() {
    try {
      // awaitによって完了を待つから、エラーはtry〜catch内で起きる
      let num = await addPromise(0);
      num = await addPromise(num);
      num = await addPromise(num);
      num = await addPromise(num);
      console.log(num);
    } catch(error) {
      // Error: Fail addPromise.
      console.error(error);
    }
  }
  
  // async関数の実行
  asyncAwaitExec();