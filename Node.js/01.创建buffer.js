// alloc全新的空间，清空遗留数据
let buf = Buffer.alloc(10);
console.log(buf);//<Buffer 00 00 00 00 00 00 00 00 00 00>
// allocUnsafe可能带有old数据的空间，不清空，所以速度块，但是要小心出现别的问题
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2);//<Buffer 00 00 00 00 00 00 00 00 00 00>
//from,将其他类型转换成buffer
let buf3 = Buffer.from('hello world')
console.log(buf3);//<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>

