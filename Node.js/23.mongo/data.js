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

    // 准备批量插入的数据
    const books = [
      { name: "西游记", author: "吴承恩", price: 19.9, is_hot: true },
      { name: "红楼梦", author: "曹雪芹", price: 29.9, is_hot: true },
      { name: "三国演义", author: "罗贯中", price: 25.9, is_hot: true },
      { name: "水浒传", author: "施耐庵", price: 20.9, is_hot: true },
      { name: "活着", author: "余华", price: 19.9, is_hot: true },
      { name: "狂飙", author: "徐纪周", price: 68, is_hot: true },
      { name: "大魏能臣", author: "黑男爵", price: 9.9, is_hot: false },
      { name: "知北游", author: "洛水", price: 59, is_hot: false },
      { name: "道君", author: "跃千愁", price: 59, is_hot: false },
      { name: "七煞碑", author: "游泳的猫", price: 29, is_hot: false },
      { name: "独游", author: "酒精过敏", price: 15, is_hot: false },
      { name: "大泼猴", author: "甲鱼不是龟", price: 26, is_hot: false },
      { name: "黑暗王者", author: "古羲", price: 39, is_hot: false },
      { name: "不二大道", author: "文刀手予", price: 89, is_hot: false },
      { name: "大泼猴", author: "甲鱼不是龟", price: 59, is_hot: false },
      { name: "长安的荔枝", author: "马伯庸", price: 45, is_hot: true },
      { name: "命运", author: "蔡崇达", price: 59.8, is_hot: true },
      { name: "如雪如山", author: "张天翼", price: 58, is_hot: true },
      { name: "三体", author: "刘慈欣", price: 23, is_hot: true },
      { name: "秋园", author: "杨本芬", price: 38, is_hot: true },
      { name: "百年孤独", author: "范晔", price: 39.5, is_hot: true },
      { name: "在细雨中呼喊", author: "余华", price: 25, is_hot: true },
    ];

    // 批量插入数据（使用 await 等待结果）
    try {
      const insertedBooks = await BookModel.insertMany(books);
      console.log("批量插入成功:", insertedBooks);
    } catch (insertError) {
      console.error("批量插入失败:", insertError);
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
