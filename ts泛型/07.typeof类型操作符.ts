// 1. typeof 在运行时的作用
console.log(typeof "Hello World"); // 输出 "string"

// 2. typeof 在类型推导中的作用
let s = "hello";
let n: typeof s; // n 的类型是 string
n = "hello"; // ✅ 正确
// n = 100;      // ❌ 错误：不能将 number 类型赋值给 string 类型

// 3. ReturnType<T> 示例
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>; // K 的类型是 boolean

function f() {
  return {
    x: 10,
    y: 3,
  };
}

type P = ReturnType<typeof f>; // P 的类型是 { x: number; y: number; }

const p: P = { x: 10, y: 3 }; // ✅ 正确
// const p2: P = 100;         // ❌ 错误：不能将 number 类型赋值给 { x: number; y: number; }

// 4. typeof 推导函数类型
function msgbox() {}
let shouldContinue: typeof msgbox; // shouldContinue 的类型是 () => void

shouldContinue = () => console.log("Hello"); // ✅ 正确
// shouldContinue = 100;                     // ❌ 错误：不能将 number 类型赋值给 () => void
