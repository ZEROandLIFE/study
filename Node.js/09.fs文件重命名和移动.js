const fs = require('fs')
//rename方法，接受三个参数，old文件地址，新的文件地址，err函数处理。
//可以实现重命名和移动两个操作
fs.rename('./名字', './代号', err => {
    if (err) {
        console.log('错误');
        return

    }
     console.log("成功");
})