<template>
  <div class="person">
    <h3>情况三:监视reactive 对象 类型</h3>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import { reactive, toRefs, ref, computed, watch } from "vue";
  let person = reactive({ name: "张三", age: 18 });
  function changeName() {
    person.name += "!";
  }
  function changeAge() {
    person.age++;
  }
  function changePerson() {
    Object.assign(person, { name:'lisi',age:20})//并非替换，而是批量修改
  }
  // 监视的是对象的地址值，默认开启深度监视，而且关不掉
  watch(person, (newvalue, oldvalue) => {
    console.log("这里是监视", newvalue, oldvalue);
  });
  //深度监视
  watch(
    person,
    (newvalue, oldvalue) => {
      console.log("这里是深度监视", newvalue, oldvalue);
    },
    { deep: true }
  );
  //立即监视，也就是刚打开 就立即执行一次
  watch(
    person,
    (newvalue, oldvalue) => {
      console.log("这里是立即监视", newvalue, oldvalue);
    },
    { immediate: true }
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
