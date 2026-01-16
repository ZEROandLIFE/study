// 以下直接访问,都会报错
// BOM;
console.log(window);
console.log(history);
console.log(navigator);
console.log(location);
// DOM;
console.log(document);
// AJAX;
let xhr = new XMLHttpRequest();

// 以下可以直接打开使用
console.log('i love you')
// setTimeout(() => {
//     console.log('love too')
//  },1000);
//global顶级对象,在这里不算windows
//console.log(global);
//console.log(globalThis);// ES2020
console.log(globalThis===global);//ES2020
