// 1. 定义泛型函数 identity
function identity<Type>(arg: Type): Type {
  return arg;
}

// 2. 正确声明泛型函数类型的变量（多种方式）

// 方式1：使用函数类型表达式
let myIdentity1: <Type>(arg: Type) => Type = identity;

// 方式2：使用不同的泛型参数名（Input 代替 Type）
let myIdentity2: <Input>(arg: Input) => Input = identity;

// 方式3：使用对象类型（调用签名）
let myIdentity3: { <Type>(arg: Type): Type } = identity;

// 方式4：使用接口定义泛型函数类型
interface GenericIdentityFn1 {
  <Type>(arg: Type): Type;
}
let myIdentity4: GenericIdentityFn1 = identity;

// 方式5：接口 + 具体类型（如 string）
interface GenericIdentityFn2<Type> {
  (arg: Type): Type;
}
let myIdentity5: GenericIdentityFn2<string> = identity;
