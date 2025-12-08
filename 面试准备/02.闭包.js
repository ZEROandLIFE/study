//闭包是指有权访问另一个函数作用域中变量的函数，即使这个函数在其词法作用域外执行。'
// 基础示例
function outer() {
    let count = 0; // 被闭包"记住"的变量
    
    return function inner() {
        count++; // 访问外部函数变量
        console.log(count);
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

//函数柯里化
function add(x) {
    return function(y) {
        return x + y;
    };
}

const add5 = add(5);
console.log(add5(3)); // 8

// 常见问题：循环中使用闭包
function problem() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i); // 全部输出5
        }, 100);
    }
}

// 解决方案1：使用IIFE创建新作用域
function solution1() {
    for (var i = 0; i < 5; i++) {
        (function(j) {
            setTimeout(function() {
                console.log(j); // 0,1,2,3,4
            }, 100);
        })(i);
    }
}

// 解决方案2：使用let（块级作用域）
function solution2() {
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i); // 0,1,2,3,4
        }, 100);
    }
}

