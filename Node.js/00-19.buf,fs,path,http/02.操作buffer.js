//buffer与字符串互换
let buf4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf4.toString());//toString在这里是转换成字符串//iloveyou
//[]
let buf3 = Buffer.from("hello world");
console.log(buf3[0].toString(2));//这个toString在这里是进制转换//1101000，不转换是104
buf3[0]=95;
console.log(buf3.toString());
//溢出
let buf5 = Buffer.from('hello');
buf5[0] = 361;//舍弃高位的数字
console.log(buf5);//<Buffer 69 65 6c 6c 6f>
//中文
let buf6 = Buffer.from("你好");
console.log(buf6);