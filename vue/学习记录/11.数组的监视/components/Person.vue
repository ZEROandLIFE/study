<template>
  <div class="person">
    <h3>情况五:监视多个数据</h3>
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

watch([() => person.name,()=>person.car.c1], (newvalue, oldvalue) => {

    console.log("变化",newvalue,oldvalue)
  })
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
