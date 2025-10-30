<template>
  <div class="person">
    <p>姓名：{{name  }}</p>
    <p>年龄：{{age  }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge ">修改年龄</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import {reactive,toRefs } from "vue";
let person = reactive({ name: '张三', age: 18 })
let {name,age}=toRefs(person)
function changeName(){
  name.value+='!'
}
function changeAge (){
  age.value++
}
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
