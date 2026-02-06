function create<Type>(c: { new (): Type }): Type {
  return new c();
}

class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

// 修复后的 createInstance 函数
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

// 正确调用
console.log(createInstance(Lion).keeper.nametag); // "Mikle"
console.log(createInstance(Bee).keeper.hasMask); // true

// 错误调用（BeeKeeper 不是 Animal 的子类）
// console.log(createInstance(BeeKeeper)); // ❌ 编译错误
