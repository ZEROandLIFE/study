<template>
  <div class="person">
    姓：<input type="text" v-model="firstname" />
    <br />
    名：<input type="text" v-model="lastname" />
    <br />
    姓名：<span>{{ fullname }}</span>
  </div>
</template>

<script setup lang="ts" name="Person114514">
  import { reactive, toRefs, ref, computed } from "vue";
  let firstname = ref("zhang");
  let lastname = ref("san");
  //这是只读的，不能直接改fullname内容
  let fullname = computed(() => {
    return (
      firstname.value.slice(0, 1).toUpperCase() +
      firstname.value.slice(1) +
      "-" +
      lastname.value
    );
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
