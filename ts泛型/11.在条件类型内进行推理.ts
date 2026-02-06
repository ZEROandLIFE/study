// 1. 定义 GetReturnType 类型
// 作用：提取函数 Type 的返回类型
// 语法：
// - `Type extends (...args: never[]) => infer Return` 检查 Type 是否是函数类型
// - 如果是函数，用 `infer Return` 推断其返回类型
// - 如果不是函数，返回 `never`
type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

// 2. 测试 GetReturnType
// 2.1 测试无参数函数
type Num = GetReturnType<() => number>; // 提取返回类型为 number
let num: Num = 100; // 正确：100 是 number 类型

// 2.2 测试单参数函数
type Str = GetReturnType<(x: string) => string>; // 提取返回类型为 string
let str: Str = "hello"; // 正确："hello" 是 string 类型

// 2.3 测试多参数函数
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>; // 提取返回类型为 boolean[]
let bools: Bools = [true, false]; // 正确：[true, false] 是 boolean[] 类型

// 3. 测试无效类型（非函数类型）
type Never = GetReturnType<string>; // string 不是函数，返回 never
let nev: Never = "error" as never; // 必须强制转换，因为 Never 是 never 类型

// 4. 测试函数重载
// 4.1 声明函数重载
function stringOrNum(x: string): number; // 重载签名1：string → number
function stringOrNum(x: number): string; // 重载签名2：number → string
// 4.2 实际实现（必须兼容所有重载签名）
function stringOrNum(x: string | number): string | number {
  return Math.random() > 0.5 ? "hello" : 42; // 实际返回 string | number
}

// 5. 使用 ReturnType 获取重载函数的返回类型
// TypeScript 的 ReturnType 是内置类型，和我们的 GetReturnType 功能相同
type T1 = ReturnType<typeof stringOrNum>; // 返回 string | number（因为实现返回 string | number）
const t1: T1 = true; // 错误：true 不是 string | number 类型
