<template>
  <div class="person">
    <p>{{ sum }}</p>
    <button @click="changeSum">jiajia</button>
    <br />
    <img v-for="(dog, index) in doglist" :src="dog" :key="index" />
    <br />
    <button @click="getDog">在获取一只小狗</button>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import useDogs from "../hooks/useDogs";
  import useSum from "../hooks/useSum";
  const { doglist, getDog } = useDogs();
  const { sum, changeSum } = useSum();
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
  img {
    width: 100px;
    margin: 10px;
  }
</style>
