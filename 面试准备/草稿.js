class MyPromise {
  constructor(fn) {
    this.state = "pedding";
    this.reason = undefined;
    this.value = undefined;
    this.onFulfilledCallback = [];
    this.onRejectedCallback = [];
    const resolve = (value) => {
      if (this.state === "pedding") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallback.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.state === "pedding") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallback.forEach((fn) => fn());
      }
    };
    try {
      fn(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function"
        ? onFulfilled
        : (value) => {
            return value;
          };
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    return new MyPromise((resolve, reject) => {
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
      if (this.state === "fulfilled") {
        setTimeout(handleFulfilled, 0);
      } else if (this.state === "rejected") {
        setTimeout(handleRejected, 0);
      } else {
        this.onFulfilledCallback.push(() => {
          setTimeout(handleFulfilled, 0);
        });
        this.onRejectedCallback.push(() => {
          setTimeout(handleRejected, 0);
        });
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  all(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0;
      let results = [];
      if (promises.length === 0) {
        resolve(results);
        return;
      }
      promises.forEach((promise, i) => {
        MyPromise.resolve(promise)
          .then((res) => {
            results[i] = res;
            count++;
            if (count === promises.length) resolve(results);
          })
          .catch(reject);
      });
    });
  }
  race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        MyPromise.resolve(promise).then(resolve).catch(reject);
      });
    });
  }
  static resolve(value) {
    if (value instanceof MyPromise) return;
    else
      return new MyPromise((resolve) => {
        resolve(value);
      });
  }
  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason);
    });
  }
}
