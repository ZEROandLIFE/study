const express = require('express')
//创建应用对象
const app = express()
//创建路由
app.get('/home', (req, res) => {
    console.log('成功返回')
    res.end('hello world')

})
app.listen(3000, () => {
    console.log('执行成功');
})