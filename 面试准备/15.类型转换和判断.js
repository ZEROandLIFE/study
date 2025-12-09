// [] == ![]	[] == false → [] == 0 → "" == 0 → 0 == 0	true
// 0 == false	false → 0 → 0 == 0	true
// null == undefined	特例	true
// " \n\t" == 0	Number(" \n\t") → 0	true
//  typeof null 返回 "object"
console.log([] == ![]);

const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr)); // "[object Array]"

const date = new Date();
console.log(Object.prototype.toString.call(date)); // "[object Date]"

const num = 123;
console.log(Object.prototype.toString.call(num)); // "[object Number]"