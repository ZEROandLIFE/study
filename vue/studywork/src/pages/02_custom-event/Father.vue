<template>
  <div class="father">
    <h3>父组件</h3>
	<h4 v-show="toy"> 儿子的玩具{{ toy }}</h4>
    <button @click="test">测试</button>

    <Child @send-toy="saveToy" />
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child from "./Child.vue";
  import { ref } from "vue";
  // 数据
  let toy = ref("");//$event是占位符，占的是自己这个事件对象，放在给函数传参的地方
  function test() {}
  // 用于保存传递过来的玩具
  function saveToy(value: string) {
	  toy.value = value;
	console.log(value);
	
  }
</script>

<style scoped>
  .father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
  }
  .father button {
    margin-right: 5px;
  }
</style>
