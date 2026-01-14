const { error } = require('console')
const fs = require('fs')
fs.appendFile('./名字', '666', error => {
    if (error) {
        console.log('出错',error)
    }
})
fs.appendFileSync("./名字", "777");
//下面这个也可以追加，了解就行
fs.writeFile("./名字", "ZERO", {flag:a},(error) => {
  if (error) {
    console.log(error, "写入错误");
    return;
  }
});