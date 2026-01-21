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

    // 删除操作（改用 Promise）
    try {
      // 方式1：删除单条（_id 替换为实际值）
      // const deleteResult = await BookModel.deleteOne({ _id: '63f34af50cf203761ede1892' });
      // console.log('删除单条成功:', deleteResult);

      // 方式2：批量删除（is_hot: false 的数据）
      const deleteManyResult = await BookModel.deleteMany({ is_hot: false });
      console.log("批量删除成功:", deleteManyResult);
    } catch (deleteError) {
      console.error("删除操作失败:", deleteError);
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
