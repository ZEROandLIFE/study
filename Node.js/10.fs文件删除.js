const fs = require('fs')
//两个参数，一个删除目标文件地址，一个回调函数
fs.unlink("./观书有感复制体", (err) => {
  if (err) {
    console.log("错误");
    return;
  }
  console.log("成功");
});
fs.rm("./观书有感复制体2", (err) => {
  if (err) {
    console.log("错误");
    return;
  }
  console.log("成功");
});