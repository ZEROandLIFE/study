<template>
  <div class="person">
    <h3>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h3>
    <p>水温:{{ temp }}</p>
    <p>水位:{{ height }}</p>
    <button @click="changeTemp">点击水温加10</button>
    <button @click="changeHeight">点击水位加10</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import { reactive, toRefs, ref, computed, watch, watchEffect } from "vue";
  let temp = ref(0);
  let height = ref(0);
  function changeTemp() {
    temp.value += 10;
  }
  function changeHeight() {
    height.value += 10;
}
  //watch监视
  // const send = watch([temp, height], () => {
  //   if (temp.value >= 60 || height.value >= 80) {
  //     alert("发送数据");
  //     send();
  //   }
  // });
//watcheffect监视,一上来就会使用下
watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
      alert("发送数据");

    }
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
