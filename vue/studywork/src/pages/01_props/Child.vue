<template>
  <div class="child">
    <h3>子组件</h3>
	<h4>玩具车:{{ toycar }}</h4>
	<h4>这是老爹的车:{{ car }}</h4>
	<button @click="sendToy(toycar)">把玩具车给父亲</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref,defineProps} from 'vue'
defineProps(['car','sendToy'])
let toycar=ref('雅迪')
</script>

<style scoped>
	.child{
		background-color: skyblue;
		padding: 10px;
		box-shadow: 0 0 10px black;
		border-radius: 10px;
	}
</style>
