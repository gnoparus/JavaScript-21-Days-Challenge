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
  function simulateAsyncAPI3(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "B") {
          reject("B got rejected!");
        } else {
          console.log(text);
          resolve();  
        }
      }, timeout);
    })
  }

  // 4. Async/Await

  function simulateAsyncAPI4(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (text === "B") {
          reject("B got rejected!");
        } else {
          console.log(text);
          resolve();  
        }
      }, timeout);
    })
  }

  async function run() {
    // // 1
    // simulateAsyncAPI("A", 3000);
    // simulateAsyncAPI("B", 2000);
    // simulateAsyncAPI("C", 1000);

    // // 2
    // simulateAsyncAPI2("A", 3000, () => {
    //   simulateAsyncAPI2("B", 2000, () => {
    //     simulateAsyncAPI2("C", 1000)
    //   })
    // });
    
    // // 3
    // simulateAsyncAPI3("A", 3000)
    // .then(() => {
    //   return simulateAsyncAPI3("B", 2000);
    // })
    // .then(() => {
    //   console.log("B is resolved")
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    // .finally(() => {
    //   return simulateAsyncAPI3("C", 1000);
    // })
    // .then(() => {
    //   console.log("C is resolved.")
    // })
    // .catch(() => {
    //   console.log("C is rejected.")
    // })

    // 4
    try {
      await simulateAsyncAPI4("A", 3000);
      await simulateAsyncAPI4("B", 2000);
      await simulateAsyncAPI4("C", 1000);    
    } catch (error) {
      console.log(error)
    }
  }

  run();
})();
