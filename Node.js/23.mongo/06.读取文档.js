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

    // 读取操作（改用 Promise）
    try {
      // 1. 读取单条（name: '狂飙'）
      // const book = await BookModel.findOne({ name: '狂飙' });
      // console.log('查询单条:', book);

      // 2. 根据 ID 获取文档
      // const bookById = await BookModel.findById('63f34af50cf203761ede1896');
      // console.log('根据 ID 查询:', bookById);

      // 3. 批量查询（author: '余华'）
      // const booksByAuthor = await BookModel.find({ author: '余华' });
      // console.log('批量查询:', booksByAuthor);

      // 4. 查询所有
      const allBooks = await BookModel.find();
      console.log("所有文档:", allBooks);
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
