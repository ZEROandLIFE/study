<template>
  <person v-if="isshow"/>

</template>
<script setup lang="ts" name="App">
import person from "./components/Person.vue";
import {ref} from "vue"
let isshow=ref(true)
</script>
<style scoped></style>
