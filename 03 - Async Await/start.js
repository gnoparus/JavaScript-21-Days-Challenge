(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  function simulateAsyncAPI(text, timeout) {
    setTimeout(() => {
      console.log(text);
    }, (timeout));
  }

  // 2. Callback

  function simulateAsyncAPI2(text, timeout, callback) {
    setTimeout(() => {
      console.log(text);
      if (callback) {
        callback();
      }
    }, timeout);
  }
  // 3. Promise
  // 4. Async/Await

  function run() {
    // // 1
    // simulateAsyncAPI("A", 3000);
    // simulateAsyncAPI("B", 2000);
    // simulateAsyncAPI("C", 1000);

    // 2
    simulateAsyncAPI2("A", 3000, () => {
      simulateAsyncAPI2("B", 2000, () => {
        simulateAsyncAPI2("C", 1000)
      })
    });
    
  }

  run();
})();
