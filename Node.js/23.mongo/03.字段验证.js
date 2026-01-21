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

    // 定义 Schema（带验证规则）
    const BookSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true, // 必填
        unique: true, // 唯一
      },
      author: {
        type: String,
        default: "匿名", // 默认值
      },
      style: {
        type: String,
        enum: ["言情", "城市", "志怪", "恐怖"], // 枚举
      },
      price: Number,
    });

    // 创建模型
    const BookModel = mongoose.model("books", BookSchema);

    // 新增数据（使用 await 等待结果）
    try {
      const newBook = await BookModel.create({
        name: "西游记",
        price: 19.9,
        style: "志怪",
        // author 未提供，会使用默认值 "匿名"
      });
      console.log("插入成功:", newBook);
    } catch (insertError) {
      console.error("插入数据失败:", insertError);
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
