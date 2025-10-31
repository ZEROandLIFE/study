<template>
  <div>
    <h2>id:{{id }}</h2>
    <h2>发布人:{{ name }}</h2>
    <h3>标题:{{ title }}</h3>
    <h3>内容:{{ content}}</h3>
  </div>
</template>

<script setup lang="ts">
// import { useRoute } from 'vue-router'
// import { toRefs } from 'vue'
// const route = useRoute()
// console.log(route);
defineProps(['id','name','title','content'])

</script>

<style scoped></style>
