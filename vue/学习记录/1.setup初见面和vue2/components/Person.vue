<template>
  <div class="person">
    <p>姓名:{{ name }}</p>
    <p>年龄:{{ age }}</p>
    <p>性别:{{ gender }}</p>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">获取手机号</button>
  </div>
</template>

<script lang="ts">
  export default {
  name: "person",
  setup() {
    //setup函数中的this是undefined,setup和data可以共存，并存的时候，data可以用this调取到setup里面的内容，但是setup搞不到data里面的
    let name :string= 'zhangsan'//此时不是响应式
    let age:number = 15
    let gender: string = "男"
    let tel: number = 13366668888
    
    function showTel():void {
        alert(tel);
      }
     function  changeName():void {
        name="张三"
      }
     function  changeAge():void {
        age++
    }
    return { name, age, gender,showTel,changeAge,changeName }
  }
    //这个是vue2的选项式
    // data() {
    //   return {
    //     name: "zhangsan",
    //     age: 15,
    //     gender: "男",
    //     tel: 13366668888,
    //   };
    // },
    // methods: {
    //   showTel() {
    //     alert(this.tel);
    //   },
    //   changeName() {
    //     this.name="张三"
    //   },
    //   changeAge() {
    //     this.age++
    //   },
  // },

  };
</script>

<style scoped>
  .person {
    height: 200px;
    width: 300px;
    background-color: #aaa;
    padding: 3px;
    font-size: 18px;
  }
  button {
    margin: 10px;
  }
</style>
