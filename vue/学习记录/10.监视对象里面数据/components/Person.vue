<template>
  <div class="person">
    <h3>情况四:监视一个对象里面的数据，getter函数</h3>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <p>车1：{{ person.car.c1 }}</p>
    <p>车2：{{ person.car.c2 }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改1</button>
    <button @click="changeC2">修改2</button>
    <button @click="changeCar">修改所有</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import { reactive, toRefs, ref, computed, watch } from "vue";
  let person = reactive({
    name: "张三",
    age: 18,
    car: { c1: "兰博基尼", c2: "法拉利" },
  });
  function changeName() {
    person.name += "!";
  }
  function changeAge() {
    person.age++;
  }
  function changeC1() {
    person.car.c1 = "雅迪";
  }
  function changeC2() {
    person.car.c2 = "绿源";
  }
  function changeCar() {
    person.car = { c1: "小牛", c2: "小驴" };
  }

  //若该属性值不是【对象类型】，需要写成函数形式
  watch(
    () => {
      return person.name;
    },
    (newvalue, oldvalue) => {
      console.log("这里是监视", newvalue, oldvalue);
    }
  );
  //若该属性值是依然是【对象类型】，可直接编，也可写成函数，不过建议写成函数。

  //这个只能看到里面的car，看不到c1，c2
  // watch(
  //   () => {
  //     return person.car;
  //   },
  //   (newvalue, oldvalue) => {
  //     console.log("这里是监视", newvalue, oldvalue);
  //   }
  // );

  //这个只能看到里面的c1，c2，看不到car
  // watch(person.car, (newvalue, oldvalue) => {
  //   console.log("这里是监视", newvalue, oldvalue);
  // });

  //这个什么都看得到
  watch(
    () => {
      return person.car;
    },
    (newvalue, oldvalue) => {
      console.log("这里是监视", newvalue, oldvalue);
    },
    { deep: true }
  );
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
