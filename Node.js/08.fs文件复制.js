const fs = require('fs')
const process=require('process')
//直接复制
let data=fs.readFileSync('./观书有感')
fs.writeFileSync('./观书有感复制体', data)
console.log(process.memoryUsage()); //rss: 30883840;这个东西是内存占用的大小
// 流式读取和输出复制
const rs = fs.createReadStream("./观书有感");
const ws = fs.createWriteStream("./观书有感复制体2");
rs.on('data', chunk => {
    ws.write(chunk)
})
rs.on("end", () => {
  //end可选事件，即完成读取操作后
  console.log(process.memoryUsage()); //rss: 32563200,对这种小文件看不出来差距，甚至占用的空间更大了
});
//管道
rs.pipe(ws)