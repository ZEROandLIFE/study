const fs = require("fs");
//创建一个空文件夹
// fs.mkdir("./测试文件夹", (err) => {
//   if (err) {
//     console.log("错误");
//     return;
//   }
//   console.log("成功");
// });


//只能删除空文件夹，不能删除递归文件夹
// fs.rmdir("./测试文件夹", (err) => {
//   if (err) {
//     console.log("错误");
//     return;
//   }
//   console.log("成功");
// });

// //递归创建  recursive:true允许递归
// fs.mkdir("./测试文件夹/a/b/c",{recursive:true}, (err) => {
//   if (err) {
//     console.log("错误");
//     return;
//   }
//   console.log("成功");
// });

// //注意删除，和上面的不一样
// fs.rm("./测试文件夹", { recursive: true }, (err) => {
//   if (err) {
//     console.log("错误");
//     return;
//   }
//   console.log("成功");
// });

