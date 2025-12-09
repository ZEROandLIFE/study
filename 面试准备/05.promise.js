见vue中知识点部分;

const promise = new Promise((resolve, reject) => {
  if (1) {
    resolve();
  } else {
    reject();
  }
});
const fetchdata = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let a = false;
      if (a) {
        resolve("success");
      } else {
        resolve("false");
      }
    }, 100);
  });
};
fetchdata
  .then((data) => console.log("Success:", data))
  .catch((error) => console.error("Error:", error))
  .finally(() => console.log("Request completed."));

promise.resolve();
promise.reject();
promise.all();

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);
Promise.all([promise1, promise2, promise3]).then((results) =>
  console.log(results)
);

// Promise 版本
function fetchData() {
  return fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

// async/await 版本
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
//手搓Promise.all
Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((res) => {
          count++;
          result[i] = res;
          if (count === promises.length) resolve(results);
        })
        .catch(reject);
    });
  });
};
//手搓promise.race
Promise.myrace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

class minipromise {
  constructor(executor) {
    this.state = "pending";
    this.value = this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
              };
      return new minipromise((resolve, reject)=>{
          const handleFulfilled = () => {
              try {
                  const result = onFulfilled(this.value)
                  resolve(result)
              } catch (error) {
                  reject(error)
              }
          }
          const handleRejected = () => {
              try {
                  const result = onRejected(this.reason)
                  resolve(result)
              } catch (error) {
                  reject(error)
              }
          }
          if (this.state === 'fulfilled') {
              setTimeout(handleFulfilled, 0)
              
          } else if (this.state === 'rejected') {
              setTimeout(handleRejected, 0)
              
          } else {
              this.onFulfilledCallbacks.push(() => {
                setTimeout(handleFulfilled, 0);
              });
              this.onRejectedCallbacks.push(() => {
                setTimeout(handleRejected, 0);
              });
          }
      })
  }
}
class MyPromise {
  constructor(executor) {
    // 1. 初始状态
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;

    // 2. 成功和失败的回调队列
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    // 3. 定义 resolve 和 reject 函数
    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        // 执行所有成功回调
        this.onFulfilledCallbacks.forEach((fn) => fn());
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        // 执行所有失败回调
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };

    // 4. 立即执行 executor
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // 5. then 方法
  then(onFulfilled, onRejected) {
    // 参数可选，不是函数则忽略
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    // 返回新的 Promise，支持链式调用
    return new MyPromise((resolve, reject) => {
      // 统一处理回调的封装函数
      const handleFulfilled = () => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = () => {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      // 根据当前状态执行
      if (this.state === "fulfilled") {
        // 已经是成功状态，立即执行
        setTimeout(handleFulfilled, 0);
      } else if (this.state === "rejected") {
        // 已经是失败状态，立即执行
        setTimeout(handleRejected, 0);
      } else {
        // 还是 pending 状态，放入回调队列
        this.onFulfilledCallbacks.push(() => {
          setTimeout(handleFulfilled, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(handleRejected, 0);
        });
      }
    });
  }

  // 6. catch 方法（基于 then 实现）
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
