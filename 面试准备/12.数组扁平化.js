const arr = [1, [2, [3, [4]], 5]];

// 默认只扁平化一层
arr.flat(); // [1, 2, [3, [4]], 5]

// 指定深度
arr.flat(2); // [1, 2, 3, [4], 5]

// 无限深度
arr.flat(Infinity); // [1, 2, 3, 4, 5]

// 移除空位
const sparse = [1, , 3];
sparse.flat(); // [1, 3]

function flatten(arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flatten(curr) : curr);
  }, []);
}
console.log(flatten(arr));

function flatt(arr, deep = Infinity) {
  return arr.reduce((pre, cur) => {
    return pre.concat(
      Array.isArray(cur) && deep > 0 ? flatt(cur, deep - 1) : cur
    );
  }, []);
}
console.log(flatt(arr));
