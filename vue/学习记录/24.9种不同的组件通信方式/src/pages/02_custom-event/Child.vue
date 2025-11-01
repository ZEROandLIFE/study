<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="send">传玩具</button>
  </div>
</template>

<script setup lang="ts" name="Child">
  import { ref } from "vue";
  let toy = ref("奥特曼");
  const emit = defineEmits(["send-toy"]);
function send() {
	emit('send-toy',toy.value)
  }
</script>

<style scoped>
  .child {
    margin-top: 10px;
    background-color: rgb(76, 209, 76);
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
  }
</style>
