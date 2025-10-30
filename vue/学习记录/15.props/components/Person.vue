<template>
  <div class="person">
    <!-- 配合第一种 -->
    <ul v-for="per  in props.personlist" :key="per.id">
      <li>姓名{{ per.name }}年龄：{{ per.age }}</li>
    </ul>
    <ul>{{ personlist }}</ul>
  </div>
</template>

<script setup lang="ts" name="Person114514">
import { defineProps ,withDefaults} from "vue";
import { type Persons } from "../type/index"

  //纯接收的，不考虑别的
  // let props = defineProps(["a", "b",'personlist']);
// console.log(props.personlist);

//接受指定类型的
// let props = defineProps<{ personlist?: Persons }>()//这是必须让父组件传递的，带个？可以解决
//也可以直接解构出来
// const{personlist} = defineProps<{ personlist: Persons }>()
// console.log(props.personlist);
//如果要的东西，跌没传，可以给一个默认值
let props =withDefaults(defineProps<{ personlist?: Persons }>(), {//还有personlist可以在上方直接用，下面没法直接用
  personlist: ()=>[{
    name:'11',age:2,id:'sb'
  }]
})//后面的写的是  函数，返回你要的对象，是如果没传参给的默认值

</script>

<style scoped>
  .person {
    margin: 100px auto;
    height: 600px;
    width: 800px;
    background-color: #aaa;
    padding: 30px;
    font-size: 18px;
  }
  button {
    margin: 10px;
  }
</style>
