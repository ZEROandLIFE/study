const http = require("http");
const url = require("url");
const sever = http.createServer((request, response) => {
  // let res = url.parse(request.url);
  //  Url {
  //   protocol: null,
  //   slashes: null,
  //   auth: null,
  //   host: null,
  //   port: null,
  //   hostname: null,
  //   hash: null,
  //   search: '?key=20',
  //   query: 'key=20',
  //   pathname: '/search',
  //   path: '/search?key=20',
  //   href: '/search?key=20'
  // }
  //如果用
  let res = url.parse(request.url, true);
  //  query: [Object: null prototype] { key: '20' },,query中的东西会被解析出来
  console.log(res);
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.end("Hello http，你好"); //结束响应并返回内容
});

//或者这样写
// const server = http.createServer((request, response) => {
//   //实例化 URL 的对象
//   // let url = new URL('http://127.0.0.1:9000/search?a=100&b=200');
//   // let url = new URL('/search?a=100&b=200', 'http://127.0.0.1:9000');
//    //拼接成这样就行。方便后续解析
//   let url = new URL(request.url, "http://127.0.0.1");
//   //输出路径
//   console.log(url.pathname);
//   //输出 keyword 查询字符串
//   console.log(url.searchParams.get("keyword"));
//   response.end("url new");
// });
sever.listen(3030, () => {
  console.log("开始监听");
});
