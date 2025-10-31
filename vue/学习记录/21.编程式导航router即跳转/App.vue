<template>
  <div class="app">
    <Header />
    <!-- 导航区 -->
    <!-- 1.路由组件通常存放在pages或views文件夹，一般组件通常存放在components文件夹。 <Header/>这种自己手动写出来的就是一般组件,那三个就是路由组件,因为它们是由路由渲染的-->
    <!-- 2，通过点击导航，视觉效果上“消失”了的路由组件，默认是被 卸载 掉的，需要的时候再去挂载。 -->
    <div class="navigate">
      <router-link to="/home" active-class="active">首页</router-link>
      <router-link :to="{name:'news'}" active-class="active">新闻</router-link>
      <router-link :to="{path:'/about'}" active-class="active">关于</router-link>
      <!-- "{path:'/about'}"这个写法以后会很常见 ,这三个写法分别是字符串写法和对象写法,以及对象写法中的两种,姓名和路由-->

    </div>
    <!-- 展示区 -->
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts" name="App">
  import { RouterView } from "vue-router";
  import Header from "./components/Header.vue";
</script>
<style scoped>
  .app {
    text-align: center;
    margin: 100px auto;
    background-color: #eee;
    border-radius: 5%;
    border: 1px solid black;
    width: 1000px;
    padding: auto;
  }
  .navigate a {
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    font-style: normal;
    text-decoration: none;
    background-color: #fff;
    font-weight: 700;
    border-radius: 5%;
  }
  .navigate a:hover {
    margin: 10px;
    padding: 10px;
    font-size: 20px;
    font-style: normal;
    color: blueviolet;
  }
  .navigate a.active {
    color: chartreuse;
    background-color: orange;
  }
  .show {
    width: 800px;
    height: 600px;
    border-radius: 5%;
    border: 1px solid black;
    background-color: #ccc;
    margin: 30px auto;
  }
</style>
