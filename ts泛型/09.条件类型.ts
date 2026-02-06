// 1. 定义 Animal 接口
interface Animal {
  live(): void;
}

// 2. 定义 Dog 接口并继承 Animal
interface Dog extends Animal {
  woof(times: number): void;
}

// 3. 条件类型 Example1
type Example1 = Dog extends Animal ? number : string; // Example1 的类型是 number

// 4. 条件类型 Example2
type Example2 = RegExp extends Animal ? number : string; // Example2 的类型是 string

// 5. 定义 IdLabel 和 NameLabel 接口
interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// 6. 函数重载定义
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;

// 7. 实现 createLabel 函数
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  if (typeof nameOrId === "number") {
    return { id: nameOrId };
  } else {
    return { name: nameOrId };
  }
}

// 8. 条件类型 NameOrId
type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

// 9. 使用泛型函数
function createLabelGeneric<T extends number | string>(
  idOrName: T
): NameOrId<T> {
  if (typeof idOrName === "number") {
    return { id: idOrName } as NameOrId<T>;
  } else {
    return { name: idOrName } as NameOrId<T>;
  }
}

// 10. 测试 createLabel
let a = createLabel("typescript"); // a 的类型是 NameLabel
let b = createLabel(2.8); // b 的类型是 IdLabel
let c = createLabel(Math.random() > 0.5 ? "hello" : 42); // c 的类型是 NameLabel | IdLabel

// 11. 测试 createLabelGeneric
let aGeneric = createLabelGeneric("typescript"); // aGeneric 的类型是 NameLabel
let bGeneric = createLabelGeneric(2.8); // bGeneric 的类型是 IdLabel
let cGeneric = createLabelGeneric(Math.random() > 0.5 ? "hello" : 42); // cGeneric 的类型是 NameLabel | IdLabel
