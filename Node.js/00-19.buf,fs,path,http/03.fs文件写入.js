const { error } = require('console')
const fs = require('fs')
//异步写入
fs.writeFile('./名字', 'ZERO', error => {
    if (error) {
        console.log(error, '写入错误')
        return
    }
})
//同步写入
fs.writeFileSync('./名字',"ZERO")