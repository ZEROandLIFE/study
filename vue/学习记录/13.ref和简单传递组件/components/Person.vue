<template>
  <div class="person">
   <h2 ref="title">333</h2>
   <button @click="titleShow"> 查看</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import { reactive, toRefs, ref, computed, watch, watchEffect,defineExpose } from "vue";
// console.log(document.getElementById('title'))这样做会导致，如果父组件有相同id的会找到的是父组件的而不是当前这个。所以要使用ref
//创建一个title，用于存储ref标记的内容
let title = ref()
let title2 = ref()
// console.log(title.value)//先加载这里的，再加载上面的模板，所以直接打印会undefined
function titleShow() {
    console.log(title.value)
}
  defineExpose({title,title2})
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
