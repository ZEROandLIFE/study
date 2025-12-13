Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
  }
  if (typeof callback !== "function") {
  }
  const obj = Object(this);
  const len = obj.length;
  const result = [];
  let resultIndex = 0;
  for (let i = 0; i < len; i++) {
    if (i in obj) {
      const keyvalue = obj[i];
      let textresult;
      if (thisArg !== undefined) {
        textresult = callback.call(thisArg, keyvalue, i, obj);
      } else {
        textresult = callback(keyvalue, i, obj);
      }
      if (textresult) {
        result[resultIndex] = keyvalue;
        resultIndex++;
      }
    }
    }
    return result
};

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.myFilter((num) => num % 2 === 0);
console.log(evens); // [2, 4]
const sparseArray = [1, , 3, , 5];
console.log("稀疏数组:", sparseArray); // [1, empty, 3, empty, 5]

const filtered = sparseArray.myFilter((x) => x > 2);
console.log("过滤结果:", filtered); // [3, 5]
console.log("结果长度:", filtered.length); // 2
