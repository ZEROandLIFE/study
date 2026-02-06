interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // 访问 length 属性
  return arg;
}

// 调用示例
loggingIdentity(["hello", "world"]); // 正确，数组有 length 属性
// loggingIdentity(123); // 错误，number 没有 length 属性
