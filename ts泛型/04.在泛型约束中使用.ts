function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

const x = {
  a: 1,
  b: 2,
  c: 3,
};

// 正确调用
const valueA = getProperty(x, "a"); // 1
const valueB = getProperty(x, "b"); // 2

// 错误调用（'m' 不在 x 的键中）
// const invalidValue = getProperty(x, 'm'); // ❌ 编译错误

// Type extends Lengthwise
// 表示 Type 必须完全包含 Lengthwise 的所有成员（即必须有 length: number）。
// 这是结构类型（Structural Typing）的约束，类似于“子类型必须实现父接口的所有成员”。
// Key extends keyof Type
// 表示 Key 必须是 Type 的已知属性名之一（即 Key 是 "a" | "b" | "c" 这样的联合类型）。
// 这是索引类型查询（keyof）的约束，和继承无关，而是关于“类型的属性名集合”。