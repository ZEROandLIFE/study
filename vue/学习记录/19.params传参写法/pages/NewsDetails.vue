<template>
  <div>
    <h2>id： {{route.params.id }}</h2>
    <h2>发布人：{{ route.params.name }}</h2>
    <h3>标题：{{ route.params.title }}</h3>
    <h3>内容：{{ route.params.content}}</h3>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { toRefs } from 'vue'
const route = useRoute()
    console.log(route);

</script>

<style scoped></style>
