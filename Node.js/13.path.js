//导入 fs
const fs = require("fs");
const path = require("path");
//写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love');
//这里正常的输出结果是会前面 \ 后面 / ，导致不好看
// console.log(__dirname + '/index.html');

//这里引入path来规范处理路径方向
//resolve  解决，第一个绝对路径，第二个以后都是相对路径
// console.log(path.resolve(__dirname, './index.html'));
// console.log(path.resolve(__dirname, 'index.html'));
//这下方的操作。会导致从第二个相对路径开始向后拼接，导致路径错误
// console.log(path.resolve(__dirname, '/index.html', './test'));

// sep 分隔符
// console.log(path.sep); // windows  \  Linux  /

// parse 方法  __dirname  '全局变量'
// console.log(__filename); // 文件的绝对路径
let str = "D:\\nodeJS\\13-path\\代码\\path.js";
// console.log(path.parse(str));

// basename
// console.log(path.basename(str));

// dirname
// console.log(path.dirname(str));

// extname
// console.log(path.extname(str));
