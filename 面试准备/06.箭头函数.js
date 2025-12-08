// 传统函数
const addtwo = function(a, b) {
    return a + b;
};

// 箭头函数
const addArrow = (a, b) => {
    return a + b;
};

// 简化形式
const addSimple = (a, b) => a + b;

// 单个参数可省略括号
const square = x => x * x;

// 无参数需要括号
const greet = () => 'Hello';

// 示例1：传统函数的this问题
const obj = {
    name: 'Alice',
    sayName: function() {
        console.log(this.name); // Alice
        
        setTimeout(function() {
            console.log(this.name); // undefined（this指向window/global）
        }, 100);
    }
};

// 示例2：使用箭头函数解决
const obj2 = {
    name: 'Bob',
    sayName: function() {
        console.log(this.name); // Bob
        
        setTimeout(() => {
            console.log(this.name); // Bob（继承外层this）
        }, 100);
    }
};
//没有 arguments 对象
//没有 prototype 属性
//不能使用 yield 命令
// 不能作为构造函数
//
const Person = function (name) {
    this.name = name;
};
const p = new Person('Alice'); // 正确

const PersonArrow = (name) => {
    this.name = name;
};
// const p2 = new PersonArrow('Bob'); // 报错！箭头函数不能new

