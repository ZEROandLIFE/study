<template>
  <div>
    这是主页
    <button @click="changePage"> 点击跳转到新闻</button>
  </div>
</template>

<script setup lang="ts" name="Home">
import { useRouter } from 'vue-router'
const router=useRouter()
const timekeeper = setTimeout(() => {
  router.push('/news')
},3000) 
function changePage() {
  router.push('/news')
}
</script>

<style scoped>
</style>