<template>
  <div class="person"></div>
</template>

<script setup lang="ts" name="Person114514">
  import {  reactive,  toRefs,  ref,  computed,  watch,  watchEffect,defineExpose,} from "vue";
  import { type PersonInterface } from "../type/index.ts";
  let person: PersonInterface = { name: "zhangsan", age: 18, id: "12" };
  let personlist :Array<PersonInterface>= [
    { name: "zhangsan", age: 18, id: "1" },
    { name: "lisi", age: 19, id: "2" },
    { name: "wangwu", age: 20, id: "3" },
  ];
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
