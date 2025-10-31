<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul v-for="talk in lovestore.loveList" :key="talk.id">
      <li>这是一句话： {{ talk.skr }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="Love">

import { reactive } from "vue";
import axios from 'axios'
import { useLoveStore} from '../store/love.ts'
const lovestore = useLoveStore()
    console.log(lovestore.loveList)
  let newid=4
function getTalk() {
    lovestore.gettalk(newid)
    newid++
  }
</script>

<style scoped>
  .talk {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    margin: 20px;
  }
</style>
