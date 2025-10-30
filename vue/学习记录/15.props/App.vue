<template>
  <person a="haha" c="heihei" :personlist="personlist"/>

</template>
<script setup lang="ts" name="App">
import person from "./components/Person.vue";
 import {  reactive,  toRefs,  ref,  computed,  watch,  watchEffect} from "vue";
  import { type PersonInterface,type Persons } from "./type/index.ts";
  let personlist = reactive<Persons>([
    { name: "zhangsan", age: 18, id: "1" },
    { name: "lisi", age: 19, id: "2" },
    { name: "wangwu", age: 20, id: "3" },
  ])
</script>
<style scoped></style>
