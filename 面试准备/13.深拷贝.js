//深拷贝 是创建一个新对象，完全复制原对象的所有属性，包括嵌套的对象和数组，使得修改新对象不会影响原对象。
const original = {
    name: 'Alice',
    skills: ['JS', 'React'],
    address: { city: 'Beijing' }
};

// 浅拷贝 - 只拷贝第一层
const shallow = { ...original };
shallow.name = 'Bob';          // 不影响original
shallow.skills.push('Vue');    // 影响original的skills！
shallow.address.city = 'Shanghai'; // 影响original的address！

console.log(original.skills);  // ['JS', 'React', 'Vue'] 
console.log(original.address.city); // 'Shanghai' 

// 深拷贝 - 完全独立
const deep = deepClone(original);
deep.skills.push('Angular');   // 不影响original
deep.address.city = 'Shenzhen'; // 不影响original

const deepCloneJSON = (obj) => JSON.parse(JSON.stringify(obj));
// 优点：简单快速
// 缺点：
const obj = {
    date: new Date(),           // 变为字符串
    func: () => console.log('hi'), // 丢失！
    regexp: /abc/gi,            // 变为空对象 {}
    undefined: undefined,       // 丢失！
    infinity: Infinity,         // 变为 null
    nan: NaN,                   // 变为 null
    symbol: Symbol('sym'),      // 丢失！
    set: new Set([1, 2]),       // 变为 {}
    map: new Map([['key', 'value']]), // 变为 {}
    // 循环引用会报错！
    self: null
};
obj.self = obj; // 循环引用

function deepClone(target, map = new WeakMap()) {
  // 1. 处理原始类型和函数（直接返回）
  if (typeof target !== "object" || target === null) {
    return target;
  }

  // 2. 处理循环引用
  if (map.has(target)) {
    return map.get(target);
  }

  // 3. 创建副本
  let clone;
  if (Array.isArray(target)) {
    clone = [];
  } else {
    clone = Object.create(Object.getPrototypeOf(target));
  }

  // 4. 记录已拷贝的对象
  map.set(target, clone);

  // 5. 递归拷贝所有属性
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      clone[key] = deepClone(target[key], map);
    }
  }

  return clone;
}
// Q1: 深拷贝和浅拷贝的区别是什么？
// 回答要点：
// 浅拷贝：只复制第一层属性，嵌套对象共享引用
// 深拷贝：递归复制所有层级，完全独立的对象

// Q2: JSON.stringify 实现深拷贝有什么问题？
// 回答：
// 丢失函数、undefined、symbol
// 正则、Date、Set、Map等特殊对象被错误转换
// 无法处理循环引用（会报错）
// 忽略原型链
// BigInt 会报错

// Q3: 如何处理循环引用？
// 回答：
// 使用 WeakMap 记录已拷贝的对象：
// function deepClone(obj, map = new WeakMap()) {
//     if (map.has(obj)) return map.get(obj);
    
//     // ...克隆逻辑...
//     map.set(obj, clone);
//     // ...递归克隆属性...
    
//     return clone;
// }
// WeakMap 的优势：键是弱引用，不会阻止垃圾回收。

// Q4: 如何拷贝函数？
// 回答：
// function cloneFunction(func) {
//     // 方法1：使用 eval（不推荐，有安全问题）
//     // 方法2：使用 new Function（推荐）
//     const body = func.toString();
//     return new Function('return ' + body)();
    
//     // 但注意：这无法复制闭包中的变量
//     // 实际开发中，函数通常不需要深拷贝
// }

// Q5: 如何拷贝 DOM 元素？
// 回答：
// function cloneDOM(element) {
//     return element.cloneNode(true); // true 表示深拷贝
// }

//优先使用现有库：lodash 的 _.cloneDeep