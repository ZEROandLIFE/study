const person = { name: 'Bob' };
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
greet.apply(person, ["hiapply", '.'])
greet.call(person, "hicall", '.')
const greeter = greet.bind(person, "hibind")
greeter('.')

Function.prototype.myapply = function (context, argsArray) {
    const fnkey = Symbol("myapply")
    context[fnkey] = this
    const result = context[fnkey](...argsArray)
    delete context[fnkey];
    return result;
}
greet.myapply(person,['himyapply',"!"])

Function.prototype.mycall = function (context, ...args) {
    const fnkey = Symbol("mycall")
    context[fnkey] = this
    const result = context[fnkey](...args)
    delete context[fnkey];
    return result;
}
greet.mycall(person, 'himycall', "!")

Function.prototype.mybind = function (context, ...args) {
    const originalFunc = this;
    
    // 返回新函数
    return function boundFunc(...callArgs) {
        // 判断是否通过new调用（作为构造函数）
        const isNewCall = this instanceof boundFunc;
        
        // 如果通过new调用，this指向新创建的对象
        // 否则使用传入的context
        const thisArg = isNewCall ? this : context;
        
        // 合并参数：bind时传入的参数 + 调用时传入的参数
        const allArgs = args.concat(callArgs);
        
        // 执行原函数
        return originalFunc.apply(thisArg, allArgs);
    };
}

// 1. 判断是否通过 new 调用：使用 this instanceof boundFunc
// 2. 如果是 new 调用，this 指向新创建的对象，而不是绑定的 context
// 3. 需要保持原型链关系：让返回的函数继承原函数的原型
// 4. 如果构造函数返回对象，需要返回该对象
const mygreeter=greet.mybind(person, 'himybind', "!")
mygreeter()