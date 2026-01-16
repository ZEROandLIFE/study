const fs = require('fs')
fs.readFile("./观书有感", (error,data) => {
  if (error) {
    console.log(error, "写入错误");
    return;
    }
    console.log(data.toString())
});
let data = fs.readFileSync('./观书有感')
console.log(data.toString());