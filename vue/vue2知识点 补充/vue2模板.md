# vue2 基本语法
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vue 2 基础模板</title>
  <!-- 引入 Vue 2 -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
</head>
<body>
  <!-- Vue 挂载的根元素 -->
  <div id="app">
    <!-- 1. 数据绑定 -->
    <h1>{{ message }}</h1>

    <!-- 2. 指令：v-if, v-for, v-bind, v-on -->
    <p v-if="isVisible">这段文字会根据 isVisible 显示/隐藏</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>

    <!-- 3. 表单双向绑定 -->
    <input v-model="inputValue" placeholder="输入内容">
    <p>你输入的内容是：{{ inputValue }}</p>

    <!-- 4. 事件处理 -->
    <button @click="handleClick">点击我</button>

    <!-- 5. 计算属性 -->
    <p>计算属性 reversedMessage: {{ reversedMessage }}</p>

    <!-- 6. 监听属性 -->
    <p>监听 count 变化：{{ count }}</p>
  </div>

  <script>
    // 创建 Vue 实例
    const vm = new Vue({
      el: '#app', // 挂载到 id="app" 的 DOM 元素

      // 数据（必须是函数，返回对象）
      data() {
        return {
          message: 'Hello Vue 2!',
          isVisible: true,
          items: [
            { id: 1, text: '苹果' },
            { id: 2, text: '香蕉' },
            { id: 3, text: '橙子' }
          ],
          inputValue: '',
          count: 0
        };
      },
       
      // 方法
      methods: {
        handleClick() {
          alert('按钮被点击了！');
          this.count++; // 修改数据
        },
        updateMessage() {
          this.message = '消息已更新！';
        }
      },

      // 计算属性（基于依赖缓存）
      computed: {
        reversedMessage() {
          return this.message.split('').reverse().join('');
        }
      },

      // 监听属性（响应数据变化）
      watch: {
        count(newVal, oldVal) {
          console.log(`count 从 ${oldVal} 变为 ${newVal}`);
        }
      },

      // 生命周期钩子
      created() {
        console.log('Vue 实例已创建，数据已初始化');
      },
      mounted() {
        console.log('DOM 已挂载，可以操作 DOM');
      }
    });
  </script>
</body>
</html>
```
