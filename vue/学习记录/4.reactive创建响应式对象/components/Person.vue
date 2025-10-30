<template>
  <div class="person">
    <p>一辆{{ carA.brand }}价值{{ carA.price }}W</p>
    <p>一辆{{ carB.brand }}价值{{ carB.price }}W</p>
    <button @click="changePrice">修改汽车的价格</button>
    <p v-for="game in games" :key="game.id">{{ game.name }}</p>
    <button @click="changeName">修改第一个游戏的名字</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  //使用reactive创建响应式对象，看见proxy，他就是被包裹的响应式。
  //同时，哪怕这个东西是a.b.c最里面的 c也是响应式的
  import { ref, reactive } from "vue";
  let carA = reactive({ brand: "奔驰", price: 199 }); //使用reactive是这样的
  let carB = ref({ brand: "宝马", price: 100 }); //使用ref是这样的
  let games = reactive([
    { id: 1, name: "王者荣耀" },
    { id: 2, name: "原神" },
    { id: 3, name: "三国杀" },
  ]);
  function changePrice() {
    carA.price++; //使用reactive是这样的
    carB.value.price++; //使用ref是这样的
  }
  function changeName() {
    games[0]!.name = "lol"; //加!的作用是强制断言
}
//   特性	    ref	                                   reactive
// 适用场景	基本类型（string、number、boolean）或对象	 对象或数组
// 访问方式	需要 .value（模板中自动解包，无需 .value）	直接访问属性
// 底层实现	返回一个 Ref 对象（包含 value 属性）	     返回一个 Proxy 对象（直接代理原始对象）
// 重新赋值	可以直接重新赋值（carB.value = { ... }）不能直接重新赋值（carA = { ... }会破坏响应式）
// 类型推断	需要手动指定泛型（如 ref<string>()）	    自动推断对象结构
// 数组处理	需要 .value 访问数组	                    直接操作数组
//对象/数组：优先用 reactive（除非需要重新赋值）。 基本类型：必须用 ref。
</script>

<style scoped>
  .person {
    margin: 100px auto;
    height: 600px;
    width: 800px;
    background-color: #aaa;
    padding: 30px;
    font-size: 18px;
  }
  button {
    margin: 10px;
  }
</style>
