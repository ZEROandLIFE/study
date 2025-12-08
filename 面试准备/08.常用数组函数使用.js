// 可修改原数组，也可返回新数组的方法
// splice()：通过参数控制添加/删除元素（修改原数组），但可通过复制数组后操作间接返回新数组。
// sort()：默认原地排序（修改原数组），但可先复制数组再排序返回新数组。
// reverse()：默认原地反转（修改原数组），但可先复制数组再反转返回新数组。
// fill()：直接填充原数组（修改原数组），但可先创建新数组再填充。
// copyWithin()：直接修改原数组（修改原数组），但可先复制数组再操作。

// 仅修改原数组的方法
// push() / pop() / unshift() / shift()：直接增删元素并修改原数组。
// splice()：直接操作原数组（增删元素）。
// sort() / reverse()：直接排序或反转原数组。
// fill() / copyWithin()：直接修改原数组内容。

// 仅返回新数组的方法
// Array.from()：从类数组或可迭代对象创建新数组。
// concat()：合并多个数组或值，返回新数组。
// slice()：截取子数组，返回新数组。
// map()：映射每个元素，返回新数组。
// filter()：过滤符合条件的元素，返回新数组。
// flat() / flatMap()：扁平化或映射后扁平化，返回新数组。
// reduce() / reduceRight()：通过计算返回累积结果（非数组时需手动处理）。

// 仅返回非数组结果的方法
// indexOf() / lastIndexOf()：返回元素索引（数值）。
// includes() / some() / every()：返回布尔值。
// find() / findIndex()：返回元素或索引（可能为 undefined）。
// toString() / join()：返回字符串。
// forEach()：无返回值（undefined）。

const arr7 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
const arr8 = Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]
Array.isArray(arr7)

arr instanceof Array

const arr = [1, 2, 3];

// 尾部操作
arr.push(4); // [1, 2, 3, 4] 返回新长度
const last = arr.pop(); // 4，[1, 2, 3] 返回被删除的元素
// 头部操作
arr.unshift(0); // [0, 1, 2, 3] 返回新长度
const first = arr.shift(); // 0，[1, 2, 3] 返回被删除的元素
// 任意位置操作
arr.splice(1, 0, 'a', 'b'); // 从索引1开始，删除0个，插入'a','b' → [1, 'a', 'b', 2, 3]
arr.splice(2, 1); // 从索引2开始，删除1个 → [1, 'a', 2, 3] 返回被删除的元素数组



const arr1 = [1, 2];
const arr2 = [3, 4];
// concat - 合并数组（不改变原数组）
const combined = arr1.concat(arr2); // [1, 2, 3, 4]
const combined2 = [].concat(arr1, arr2, 5); // [1, 2, 3, 4, 5]



// slice - 截取数组（不改变原数组）
arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3] (索引1到3，不包括3)
arr.slice(2); // [3, 4, 5] (索引2到最后)
arr.slice(-2); // [4, 5] (最后两个)



arr = [1, 2, 3, 2, 5];
// indexOf/lastIndexOf - 查找索引
arr.indexOf(2); // 1 (第一个2)
arr.lastIndexOf(2); // 3 (最后一个2)
arr.indexOf(6); // -1 (未找到)
// includes (ES7) - 是否包含
arr.includes(3); // true
arr.includes(3, 3); // false (从索引3开始找)
// find/findIndex (ES6) - 查找符合条件的元素/索引
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Alice' }
];
users.find(user => user.name === 'Alice'); // {id: 1, name: 'Alice'}
users.findIndex(user => user.name === 'Alice'); // 0
users.findLast(user => user.name === 'Alice'); // {id: 3, name: 'Alice'} (ES2023)
users.findLastIndex(user => user.name === 'Alice'); // 2 (ES2023)


arr = [1, 2, 3];
// toString/toLocaleString
arr.toString(); // "1,2,3"
arr.join(); // "1,2,3" (默认逗号)
arr.join(' - '); // "1 - 2 - 3"
arr.join(''); // "123"

// 稀疏数组处理
const sparse = [1, , 3];
sparse.join(); // "1,,3"


arr = [1, 2, 3];

// forEach - 遍历执行（无返回值）
arr.forEach((item, index, array) => {
    console.log(item, index);
});
// 1 0
// 2 1
// 3 2

// map - 映射新数组
const doubled = arr.map(item => item * 2); // [2, 4, 6]

// filter - 过滤数组
const evens = arr.filter(item => item % 2 === 0); // [2]

// reduce/reduceRight - 累积计算
const sum = arr.reduce((acc, cur) => acc + cur, 0); // 6
const max = arr.reduce((acc, cur) => Math.max(acc, cur)); // 3

// 计算每个元素出现次数
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
// {apple: 2, banana: 3, orange: 1}



arr = [1, 2, 3, 4, 5];

// some - 是否有元素满足条件
arr.some(item => item > 3); // true
arr.some(item => item > 10); // false

// every - 是否所有元素都满足条件
arr.every(item => item > 0); // true
arr.every(item => item > 2); // false


// flat/flatMap (ES2019)
const nested = [1, [2, [3, [4]]]];
nested.flat(); // [1, 2, [3, [4]]]
nested.flat(2); // [1, 2, 3, [4]]
nested.flat(Infinity); // [1, 2, 3, 4]

arr = [1, 2, 3];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]

arr = [3, 1, 4, 1, 5, 9];

// sort - 原地排序
arr.sort(); // [1, 1, 3, 4, 5, 9] (默认字符串排序)

// 数字排序
arr.sort((a, b) => a - b); // 升序
arr.sort((a, b) => b - a); // 降序

// 对象数组排序
users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 }
];

users.sort((a, b) => a.age - b.age); // 按年龄升序
users.sort((a, b) => a.name.localeCompare(b.name)); // 按名字字母顺序

// reverse - 反转数组
arr.reverse(); // [9, 5, 4, 3, 1, 1]


// fill (ES6) - 填充数组
arr = new Array(5).fill(0); // [0, 0, 0, 0, 0]
arr2 = [1, 2, 3, 4, 5];
arr2.fill(0, 1, 3); // [1, 0, 0, 4, 5] (索引1到3，不包括3)

// copyWithin (ES6) - 内部复制
const arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(0, 3); // [4, 5, 3, 4, 5] (从索引3开始复制到索引0)
arr3.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5] (复制索引3到索引4)



//  异步函数中使用
const urls = ['url1', 'url2', 'url3'];
// ❌ 错误：不会等待异步完成
urls.forEach(async url => {
    await fetch(url);
});

// ✅ 正确：使用for...of
for (const url of urls) {
    await fetch(url);
}