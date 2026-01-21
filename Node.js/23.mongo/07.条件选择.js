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

    // 查询操作（改用 Promise）
    try {
      // 1. 查询价格小于 20 的图书
      // const cheapBooks = await BookModel.find({ price: { $lt: 20 } });
      // console.log('价格小于 20 的图书:', cheapBooks);

      // 2. 查询曹雪芹 或 余华 的书
      // const authorsBooks = await BookModel.find({ $or: [{ author: '曹雪芹' }, { author: '余华' }] });
      // console.log('曹雪芹 或 余华 的书:', authorsBooks);

      // 3. 查询价格大于 30 且小于 70 的图书
      // const priceRangeBooks = await BookModel.find({ $and: [{ price: { $gt: 30 } }, { price: { $lt: 70 } }] });
      // console.log('价格大于 30 且小于 70 的图书:', priceRangeBooks);

      // 4. 查询书名包含 "三" 的图书（正则表达式）
      // const regexBooks = await BookModel.find({ name: /三/ });
      // console.log('书名包含 "三" 的图书:', regexBooks);

      // 5. 查询书名包含 "三" 的图书（使用 RegExp 对象）
      const regexBooks = await BookModel.find({ name: new RegExp("三") });
      console.log('书名包含 "三" 的图书:', regexBooks);
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
