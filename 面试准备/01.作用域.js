// 作用域是变量和函数的可访问范围，规定了在何处以及如何查找变量。
//JavaScript 采用词法作用域（静态作用域），函数的作用域在函数定义时就确定了，而不是在调用时。
// 1. 全局作用域
let globalVar = "全局变量"; // 全局作用域

// 2. 函数作用域
function testFunction() {
    var functionVar = "函数作用域变量";
    console.log(globalVar); // 可访问
    console.log(functionVar); // 可访问
}
// 3. 块级作用域
if (true) {
    let blockVar = "块级作用域变量";
    const constVar = "常量";
    console.log(blockVar); // 可访问
}

// console.log(blockVar); // ReferenceError: 不可访问
// 查找顺序：inner → outer → 全局
 

// 变量提升
// 变量提升是JavaScript引擎在代码执行前将变量声明和函数声明提升到其作用域顶部的过程。
// 代码分析
// console.log(a); // undefined，而不是ReferenceError
// var a = 10;
// // =>实际执行顺序：

// var a;          // 声明提升到顶部
// console.log(a); // undefined
// a = 10;         // 赋值留在原地

// let/const 也有提升，但行为不同，暂时性死区（TDZ）
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

// 暂时性死区（Temporal Dead Zone）
{
    // TDZ开始
    console.log(b); // ReferenceError
    // TDZ...
    let b = 20;     // TDZ结束
    console.log(b); // 20
}

// 函数声明完全提升
sayHello(); // "Hello!" - 可以调用

function sayHello() {
    console.log("Hello!");
}

// 对比函数表达式（不被提升）
sayHi(); // TypeError: sayHi is not a function

var sayHi = function() {
    console.log("Hi!");
};




// 函数声明 vs 变量声明
console.log(typeof myFunc); // "function" - 函数优先

var myFunc = "我是变量";
function myFunc() {
    return "我是函数";
}

console.log(typeof myFunc); // "string" - 被覆盖

// 实际提升后的顺序：
function myFunc() {
    return "我是函数";
}
var myFunc;                 // 重复声明，忽略
myFunc = "我是变量";        // 赋值



// var在块级作用域中
{
    console.log(blockVar); // undefined
    var blockVar = "inside block";
}
console.log(blockVar); // "inside block" - 泄漏到外部

// let在块级作用域中
{
    // console.log(letVar); // ReferenceError
    let letVar = "inside block";
    console.log(letVar); // "inside block"
}
// console.log(letVar); // ReferenceError

// 面试题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3
    }, 100);
}

// 提升后相当于：
var i;
for (i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 所有回调共享同一个i
    }, 100);
}

// 使用let解决：
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // 0, 1, 2
    }, 100);
}

for (var i = 0; i < 3; i++) {
    setTimeout(function(j) {
        console.log(j); // 0, 1, 2
    }, 100, i);
}
for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j); // 0, 1, 2
        }, 100);
    })(i);
}

// class 声明不会被提升
// const p = new Person(); // ReferenceError

class Person {
//   name: string; // ts声明 name 属性
  constructor(name) {
    this.name = name;
  }
}

const p = new Person("张三"); // 正确

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();

//10

function test() {
  console.log(a);
  console.log(b());
  console.log(c);

  var a = 1;
  function b() {
    return 2;
  }
  var c = function () {
    return 3;
  };
  console.log(c());
}
test();
// undefined;
// 2;
// undefined;
// 3;

let x = 10;
{
  console.log(x); // ?
  let x = 20;
}
//ReferenceError: Cannot access 'x' before initialization
// let 变量在声明前不能被访问，console.log(x) 会直接报错，而不是访问外部的 x = 10
