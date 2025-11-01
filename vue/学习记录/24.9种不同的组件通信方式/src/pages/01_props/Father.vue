<template>
  <div class="father">
    <h3>父组件</h3>
	<h4>汽车:{{ car }}</h4>
	<h4 v-show="toy" >儿子的玩具:{{ toy }}</h4>
	<Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
let toy=ref('')
let car=ref('奥迪')
function getToy(childtoy:string ) {
	toy.value=childtoy
}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>