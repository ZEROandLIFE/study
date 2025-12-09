// 柯里化（Currying）是一种 将多参数函数转换为单参数函数序列 的技术，便于函数复用和延迟执行。
// 普通函数
function add(a, b, c) {
  return a + b + c;
}

// 柯里化版本
function curryAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(curryAdd(1)(2)(3)); // 输出: 6

//手搓柯里化
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this,args)
        } else {
            return function (...moreargs) {
                return curried.apply(this,args.concat(moreargs))
            }
        }
    }
}
// 原始函数
function sum(a, b, c) {
  return a + b + c;
}

// 柯里化后的函数
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 输出: 6
console.log(curriedSum(1, 2)(3)); // 输出: 6（支持部分传参）
console.log(curriedSum(1)(2, 3)); // 输出: 6


