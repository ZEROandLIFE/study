// 1. 定义 Messageof 类型
type Messageof<T> = T extends { message: unknown } ? T["message"] : never;

// 2. 定义 Email 接口
interface Email {
  message: string;
}

// 3. 定义 Dog 接口
interface Dog {
  bark(): void;
}

// 4. 测试 Messageof 类型
type EmailMessageContents = Messageof<Email>; // string
const emc: EmailMessageContents = "balabala...";

type DogMessageContents = Messageof<Dog>; // never（因为 Dog 没有 message 属性）
const dmc: DogMessageContents = "error" as never; // 必须强制转换，因为 DogMessageContents 是 never

// 5. 定义 Flatten 类型
type Flatten<T> = T extends any[] ? T[number] : T;

// 6. 测试 Flatten 类型
type Str = Flatten<string[]>; // string
type Num = Flatten<number>; // number（注意：number 不是数组，所以 Flatten<number> = number）
