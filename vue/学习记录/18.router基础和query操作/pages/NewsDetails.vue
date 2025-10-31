<template>
  <div>
    <h2>id： {{ route.query.id }}</h2>
    <h2>发布人：{{ route.query.name }}</h2>
    <h3>标题：{{ route.query.title }}</h3>
    <h3>内容：{{ route.query.content }}</h3>
  </div>
</template>

<script setup lang="ts">
//query传参
  import {ref,toRefs} from 'vue'
  import { useRoute } from "vue-router";
  let route = useRoute();
  console.log("这是route", route);
  console.log(route.fullPath);
  console.log(route.query);
// let {id,name,content,title}=toRefs(route.query)//不能这样用，静态解出来的不刷新，但是toRefs只能用在reactive上，query不简单，导致无法正确结构，直接用query.属性在上面就完事了
//但是可以这样  let query=toRefs(route),然后上面用query
    
</script>

<style scoped></style>
