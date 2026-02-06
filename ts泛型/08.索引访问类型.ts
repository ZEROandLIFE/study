// 1. 定义 Person 类型（使用 type 或 interface）
type Person = {
  age: number;
  name: string;
  alive: boolean;
};

// 2. 提取 Person['age'] 的类型
type Age = Person["age"]; // Age 的类型是 number
let age: Age = 90; // ✅ 正确
// let age: Age = '90'; // ❌ 错误：不能将 string 类型赋值给 number 类型

// 3. 使用 interface 定义 Person
interface IPerson {
  name: string;
  age: number;
  alive: boolean;
}

// 4. 定义联合类型 I1（错误示例修复）
type I1 = string | number; // I1 可以是 string 或 number
const i11: I1 = 100; // ✅ 正确
const i12: I1 = "hello"; // ✅ 正确
// const i13: I1 = true; // ❌ 错误：boolean 不是 string | number 的一部分

// 5. 使用 keyof 获取 Person 的所有键的类型
type I2 = Person[keyof Person]; // I2 可以是 string | number | boolean
const i21: I2 = "Alice"; // ✅ 正确（string）
const i22: I2 = 100; // ✅ 正确（number）
const i23: I2 = true; // ✅ 正确（boolean）
// const i24: I2 = {}; // ❌ 错误：对象不是 string | number | boolean 的一部分

// 6. 使用联合类型作为索引
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName]; // I3 可以是 boolean | string
const i31: I3 = true; // ✅ 正确（boolean）
const i32: I3 = "hello"; // ✅ 正确（string）
// const i33: I3 = 100; // ❌ 错误：number 不是 boolean | string 的一部分

// 7. 错误的属性名（会报错）
// type I4 = Person['alve']; // ❌ 错误：Person 没有 'alve' 属性

// 8. 定义数组类型并提取元素类型
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

// 提取数组元素的类型
type PersonFromArray = (typeof MyArray)[number]; // PersonFromArray 的类型是 { name: string; age: number; }
const p: PersonFromArray = { name: "xiaoqian", age: 11 }; // ✅ 正确
// p.alive; // ❌ 错误：PersonFromArray 没有 'alive' 属性

// 9. 提取 age 类型
type AgeFromArray = (typeof MyArray)[number]["age"]; // AgeFromArray 的类型是 number
const ageFromArray: AgeFromArray = 11; // ✅ 正确

// 10. 再次提取 Person['age']（与 AgeFromArray 相同）
type Age2 = PersonFromArray["age"]; // Age2 的类型是 number
const age2: Age2 = 300; // ✅ 正确（尽管 300 可能不合法，但类型检查通过）
