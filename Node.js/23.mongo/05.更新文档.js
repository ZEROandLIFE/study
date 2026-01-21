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

    // 更新操作（改用 Promise）
    try {
      // 方式1：更新单条（name: '红楼梦' 的价格改为 9.9）
      // const updateResult = await BookModel.updateOne(
      //   { name: '红楼梦' },
      //   { price: 9.9 }
      // );
      // console.log('更新单条成功:', updateResult);

      // 方式2：批量更新（author: '余华' 的 is_hot 改为 true）
      const updateManyResult = await BookModel.updateMany(
        { author: "余华" },
        { is_hot: true }
      );
      console.log("批量更新成功:", updateManyResult);
    } catch (updateError) {
      console.error("更新操作失败:", updateError);
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
