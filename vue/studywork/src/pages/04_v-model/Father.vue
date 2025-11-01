<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
    
    <!-- $event到底是啥？啥时候能.target
    对于原生事件，$event就是事件对象=====>能.target
    对于自定义事件，$event就是触发事件时，所传递的数据==>不能.target -->
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input
      type="text"
      :value="username"
      @input="username = (<HTMLInputElement>$event.target).value"
    /> -->
    <!-- 使用下面这个写法更好 -->
    <!-- <input
      type="text"
      :value="username"
      @input="(e) => username = (e.target as HTMLInputElement).value"
    /> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- <AtguiguInput 
      :modelValue="username" 
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model:ming="username" v-model:mima="password" />
  </div>
</template>

<script setup lang="ts" name="Father">
  import { ref } from "vue";
  import AtguiguInput from "./AtguiguInput.vue";
  // 数据
  let username = ref("zhansgan");
  let password = ref("123456");
</script>

<style scoped>
  .father {
    padding: 20px;
    background-color: rgb(165, 164, 164);
    border-radius: 10px;
  }
</style>
