const mongoose = require("mongoose");

// 设置 strictQuery 为 true
mongoose.set("strictQuery", true);

// 连接 MongoDB 服务
mongoose.connect("mongodb://127.0.0.1:27017/bilibili");

// 封装数据库操作为一个 async 函数
async function run() {
  try {
    // 等待连接成功
    await new Promise((resolve, reject) => {
      mongoose.connection.once("open", resolve);
      mongoose.connection.on("error", reject);
    });

    console.log("数据库连接成功");

    // 定义 Schema
    const BookSchema = new mongoose.Schema({
      name: String,
      author: String,
      price: Number,
      is_hot: Boolean,
      tags: Array,
      pub_time: Date,
      test: mongoose.Schema.Types.Mixed,
    });

    // 创建模型
    const BookModel = mongoose.model("books", BookSchema);

    // 新增数据（使用 Promise 封装）
    const newBook = await BookModel.create({
      name: "西游记",
      author: "吴承恩",
      price: 19.9,
      is_hot: true,
      tags: ["鬼怪", "励志", "社会"],
      pub_time: new Date(),
      test: new Date(),
    });

    console.log("插入成功:", newBook);
  } catch (err) {
    console.error("数据库操作失败:", err);
  } finally {
    // 关闭数据库连接
    await mongoose.disconnect();
    console.log("数据库连接已关闭");
  }
}

// 执行
run();
