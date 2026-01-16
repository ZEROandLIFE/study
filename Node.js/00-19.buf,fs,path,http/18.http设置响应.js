const http = require("http");
const sever = http.createServer((request, response) => {
  //1. 设置响应状态码
  // response.statusCode = 203;
  // response.statusCode = 404;
  //2. 响应状态的描述 了解即可，一般用不上，会自动根据响应状态码设置
  // response.statusMessage = 'iloveyou';
  //3. 响应头
  // response.setHeader('content-type', 'text/html;charset=utf-8');
  // response.setHeader('Server', 'Node.js');
  // response.setHeader('myHeader', 'test test test');
  //设置多个同名响应头
  // response.setHeader('test', ['a','b','c']);
  //4. 响应体的设置 如果write设置了，end就不用在设置了
  //write可以有多个，end有且只能有一个
  response.write("love");
  response.write("love");
  response.write("love");
  response.write("love");
  response.end("love"); //设置响应体
  response.end("xxx"); //设置响应体
});
sever.listen(3030, () => {
  console.log("开始监听");
});
