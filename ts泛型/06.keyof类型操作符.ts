// 1. 修复 Point 类型定义
type Point = {
  x: number;
  y: number;
};

// 2. keyof Point 获取 Point 的键（'x' | 'y'）
type P = keyof Point;

const p1: P = "x"; // ✅ 正确
const p2: P = "y"; // ✅ 正确
// const p3: P = 'z'; // ❌ 错误：'z' 不是 Point 的键

// 3. 修复 Arrayish 类型定义
type Arrayish = {
  [n: number]: unknown; // 数字索引签名
};

// 4. keyof Arrayish 获取数字索引签名的键（即 number）
type A = keyof Arrayish;

const a: A = 0; // ✅ 正确（number 类型）
// const a2: A = 'foo'; // ❌ 错误：字符串不能赋值给 number

// 5. 修复 Mapish 类型定义
type Mapish = {
  [k: string]: boolean; // 字符串索引签名
};

// 6. keyof Mapish 获取字符串索引签名的键（即 string | number）
type M = keyof Mapish;

const m1: M = "foo"; // ✅ 正确（string 类型）
const m2: M = 100; // ✅ 正确（number 可以转换为 string）
// const m3: M = true; // ❌ 错误：boolean 不能赋值给 string | number
