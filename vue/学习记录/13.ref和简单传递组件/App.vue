<template>
  <person ref="ren"/>
  <button @click="titleShow"> 查看</button>
</template>
<script setup lang="ts" name="App">
import person from "./components/Person.vue";
import {ref} from 'vue'
let ren=ref()
// console.log(ren)
  function titleShow() {
    console.log(ren.value)
}
</script>
<style scoped></style>
