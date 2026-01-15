const fs = require('fs')
const rs = fs.createReadStream('')//这个里面放要解析的文件
rs.on('data', chunk => {//绑定data数据,chunk 块，大块的
    console.log(chunk);
    console.log(chunk.length);
})
rs.on('end', () => {//end可选事件，即完成读取操作后
    console.log('读取完成');
})