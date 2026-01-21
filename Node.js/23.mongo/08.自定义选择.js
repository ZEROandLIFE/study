const mongoose = require("mongoose");

// 设置 strictQuery 为 true
mongoose.set("strictQuery", true);

// 封装数据库连接为 Promise
function connectDB() {
  return new Promise((resolve, reject) => {
    mongoose.connect("mongodb://127.0.0.1:27017/bilibili");
    mongoose.connection.once("open", resolve);
    mongoose.connection.on("error", reject);
  });
}

// 主逻辑
async function main() {
  try {
    // 等待数据库连接成功
    await connectDB();
    console.log("数据库连接成功");

    // 定义 Schema
    const BookSchema = new mongoose.Schema({
      name: String,
      author: String,
      price: Number,
      is_hot: Boolean,
    });

    // 创建模型（集合名称为 'novels'，mongoose 会自动复数化）
    const BookModel = mongoose.model("novel", BookSchema);

    // 查询操作（改用 Promise 链式调用）
    try {
      const books = await BookModel.find()
        .select({ name: 1, price: 1, _id: 0 }) // 仅返回 name 和 price 字段
        .sort({ price: -1 }) // 按 price 降序排序
        .skip(3) // 跳过前 3 条数据
        .limit(3) // 限制返回 3 条数据
        .exec(); // 执行查询

      console.log("查询结果:", books);
    } catch (queryError) {
      console.error("查询失败:", queryError);
    }
  } catch (err) {
    console.error("数据库操作失败:", err);
  } finally {
    // 关闭数据库连接
    await mongoose.disconnect();
    console.log("数据库连接已关闭");
  }
}

// 执行主逻辑
main();
