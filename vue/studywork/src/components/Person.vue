<template>
  <div class="person">
    <p>{{ sum }}</p>
    <button @click="changeSum">jiajia</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from "vue";
  let sum = ref(0);
  function changeSum() {
    sum.value++;
}
  //挂载的时候先挂载子组件再挂载父组件
  //创建
  console.log("创建");
  //挂载
  onBeforeMount(() => {
    console.log("挂载前");
  });
  onMounted(() => {
    console.log("挂载完毕");
  });
  //更新
  onBeforeUpdate(() => {
    console.log("更新前");
  });
  onUpdated(() => {
    console.log("更新完毕");
  });
  onBeforeUnmount(() => {
    console.log("卸载前");
  });
  onUnmounted(() => {
    console.log("卸载完毕");
  });
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
