<template>
  <nav class="main-nav">
    <!-- 基本用法 -->
    <router-link to="/" exact-active-class="exact-active">首页</router-link>
    
    <!-- 带参数的路由 -->
    <router-link :to="{ name: 'user', params: { id: user.id }}">
      用户中心
    </router-link>
    
    <!-- 查询参数 -->
    <router-link :to="{ path: '/search', query: { q: 'vue' }}">
      搜索 Vue
    </router-link>
    
    <!-- 自定义渲染 -->
    <router-link to="/settings" custom v-slot="{ navigate, isActive }">
      <button 
        @click="navigate" 
        class="icon-btn"
        :class="{ active: isActive }"
      >
        ⚙️ 设置
      </button>
    </router-link>
    //用来占位进行演示
    <router-view></router-view>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const user = ref({ id: 123, name: '张三' })
</script>

<style scoped>
.main-nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
}

.main-nav a {
  padding: 10px 15px;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 4px;
  transition: all 0.3s;
}

.main-nav a:hover {
  background-color: #e0e0e0;
}

.main-nav a.exact-active {
  background-color: #42b883;
  color: white;
}

.icon-btn {
  padding: 10px 15px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.icon-btn.active {
  background-color: #42b883;
  color: white;
}
</style>