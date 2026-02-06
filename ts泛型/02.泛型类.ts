class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

// 示例1：使用 number 类型
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

// 示例2：使用 string 类型
let myGenericString = new GenericNumber<string>();
myGenericString.zeroValue = "";
myGenericString.add = function (x, y) {
  return x + y;
};
