// 1. 定义 `ToArray`（分发版本）
type ToArray<Type> = Type extends any ? Type[] : never;

// 2. 定义 `ToArrayNonDist`（非分发版本）
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

// 3. 测试 `ToArray`（分发行为）
type StrArrOrNumArr1 = ToArray<string | number>;
// 等价于：ToArray<string> | ToArray<number> → string[] | number[]
let arr1: StrArrOrNumArr1 = []; // 可以是 string[] 或 number[]
arr1 = ["hello"]; // ✅
arr1 = [42]; // ✅
arr1 = [true]; // ❌ 错误，因为 `boolean` 不在 `string | number` 里

// 4. 测试 `ToArrayNonDist`（非分发行为）
type StrArrOrNumArr2 = ToArrayNonDist<string | number>;
// 等价于：(string | number)[] → 因为 `[string | number] extends [any]` 为 true
let arr2: StrArrOrNumArr2 = []; // 必须是 (string | number)[]
arr2 = ["hello"]; // ✅
arr2 = [42]; // ✅
arr2 = ["hello", 42]; // ✅
arr2 = [true]; // ❌ 错误，因为 `boolean` 不在 `string | number` 里

// 5. 你的错误示例修正
let saon: StrArrOrNumArr2 = [true]; // ❌ 错误，因为 `boolean` 不在 `string | number` 里
