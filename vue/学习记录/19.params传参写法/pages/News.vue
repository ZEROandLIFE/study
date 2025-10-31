<template>
  <div>
    <h2>这是新闻页面</h2>
    <ul v-for="item in newslist" :key="item.id">
      <!-- 这个是params传参 -->
      <!-- <router-link :to="`/news/newsdetails/${item.id }/${item.name}/${item.title}/${item.content}`">{{item.title}}</router-link> -->
      <router-link
        :to="{
          name: 'newsdetails',
          params: {
            id: item.id,
            name: item.name,
            title: item.title,
            content: item.content,
          },
        }"
        >{{ item.title }}</router-link
      >
      <!-- Vue Router 的 params 仅在通过 name 跳转时生效,而且也不能传数组。 -->
    </ul>
    <h3>这是展示区域</h3>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts" name="News">
  import { reactive } from "vue";
  const newslist = reactive([
    {
      id: 1,
      name: "张三",
      title: "Vue 3 正式发布",
      content:
        "Vue 3 带来了 Composition API、Teleport 等新特性，性能大幅提升。",
    },
    {
      id: 2,
      name: "李四",
      title: "TypeScript 5.0 新特性",
      content: "TypeScript 5.0 引入了更快的构建速度和更好的类型推断。",
    },
    {
      id: 3,
      name: "王五",
      title: "Pinia 成为 Vue 官方状态管理库",
      content: "Pinia 替代 Vuex，成为 Vue 推荐的状态管理方案。",
    },
  ]);
</script>

<style scoped></style>
