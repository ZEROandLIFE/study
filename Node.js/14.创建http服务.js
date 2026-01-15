const http = require("http");
const sever = http.createServer((request, response) => {
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.end("Hello http，你好"); //结束响应并返回内容
});
sever.listen(3030, () => {
  console.log("开始监听");
});
