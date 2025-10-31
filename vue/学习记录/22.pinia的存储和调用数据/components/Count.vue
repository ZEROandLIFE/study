<template>
  <div class="count">
    <p>计数{{ countStore.sum }}</p>

    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="addSum">加</button>
    <button @click="minusSum">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from "vue";
  import { useCountStore } from "../store/count";
  import { storeToRefs } from "pinia";

  const countStore = useCountStore();
  //都能拿到数据
  console.log(countStore.sum);
  console.log(countStore.$state.sum);
  //用这个可以把所有数据变成响应式的，不会变别的
  const { sum } = storeToRefs(countStore);

  let n = ref(1);
  function addSum() {
    //第一种i修改，直接改
    countStore.sum += n.value;
    //第二种修改，一次可以改好几个,批量变更,而且整体省时间
    // countStore.$patch({
    //     sum: 333
    // })
    //第三种修改方式
    countStore.increment(n.value);
    console.log(sum.value);
  }
  function minusSum() {
    countStore.sum -= n.value;
    countStore.decrease(n.value);
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin: 20px;
  }
  p {
    font-size: 30px;
  }
  button,
  select {
    font-size: 30px;
    margin: 10px;
    width: 100px;
  }
</style>
