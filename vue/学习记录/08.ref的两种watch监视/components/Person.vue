<template>
  <div class="person">
    <h3>情况一:监视ref 基本 类型</h3>
    <p>求和：{{ sum }}</p>
    <button @click="changeSum">改变</button>
    <h3>情况二:监视ref 对象 类型</h3>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改人</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import { reactive, toRefs, ref, computed, watch } from "vue";
  //情况一
  let sum = ref(0);
  function changeSum() {
    sum.value++;
  }

  const stopwatch = watch(sum, (newvalue, oldvalue) => {
    console.log(sum.value, newvalue, oldvalue);
    if (newvalue >= 10) {
      stopwatch(); //再次调用就解除监视了
    }
  });
  // console.log(stopwatch);//这就是接受了一个函数

  let person = ref({ name: "张三", age: 18 });
  function changeName() {
    person.value.name += "!";
  }
  function changeAge() {
    person.value.age++;
  }
  function changePerson() {
    person.value = { name: "lisi", age: 20 };
  }
  // 监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
  // 只是改变自己的，newvalue=oldvalue，大部分时间其实不管旧的
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
