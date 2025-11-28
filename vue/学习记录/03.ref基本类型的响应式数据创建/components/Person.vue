<template>
  <div class="person">
    <p>姓名:{{ name }}</p>
    <p>年龄:{{ age }}</p>
    <p>性别:{{ gender }}</p>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">获取手机号</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  //ref基本类型的响应式数据创建
  //要安装npm i vite-plugin-vue-setup-extend -D
  //data里面的东西默认就是响应式的，但是vue3要使用ref和reactive
  import { ref } from "vue";
  let name = ref("zhangsan");
  //不能这样写， let name:string= ref("zhangsan");这样写是错误的
  //要么写成let name= ref("zhangsan"); 让他自行推断类型
  //要么写成const name: Ref<string> = ref("zhangsan");同时引入type Ref
  let age = ref(15);
  let gender: string = "男";
  let tel: number = 13366668888;

  function showTel(): void {
    alert(tel);
  }
  function changeName(): void {
    name.value = "张三"; //ref在js中操作必须带上value
  }
  function changeAge(): void {
    age.value++;
  }
</script>

<style scoped>
  .person {
    margin: 100px auto;
    height: 300px;
    width: 800px;
    background-color: #aaa;
    padding: 30px;
    font-size: 18px;
  }
  button {
    margin: 10px;
  }
</style>
