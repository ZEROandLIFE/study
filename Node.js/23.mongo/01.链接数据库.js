const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/bilibili"); ///bilibili这里是要操作的数据库，要是没有就自动创建
//设置连接成功的回调 官方建议使用once，也就是只绑定一次
mongoose.connection.once("open", () => {
  console.log("连接成功");
  //设置集合中文档的属性以及属性值的类型
  let BookSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
  });
  //6. 创建模型对象  对文档操作的封装对象
  let BookModel = mongoose.model("books", BookSchema); //第一个是集合名称，第二个是结构对象，可以对BookModel进行增删改查的操作
  BookModel.create({
    name: "西游记",
    author: "吴承恩",
    price: 19.9,
  })
    .then((data) => {
      console.log(data);
      // 如果需要可以在这里关闭连接
      // mongoose.disconnect();
    })
    .catch((err) => {
      console.log(err);
    });
});
//设置连接失败的回调
mongoose.connection.on("error", () => {
  console.log("连接失败");
});
//设置关闭的回调
mongoose.connection.on("close", () => {
  console.log("连接关闭");
});
//关闭
// setTimeout(() => {
//     mongoose.disconnect()
// }, 2000);
