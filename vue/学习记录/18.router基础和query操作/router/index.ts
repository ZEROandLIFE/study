//创建一个路由器并暴露出去
//第一步，引入路由,和可能要引入的组件
import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import NewsDetails from "../pages/NewsDetails.vue";
//第二步，创建路由器
// history模式
// 优点：URL更加美观，不带有#，更接近传统的网站URL。
// 缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误。

// hash模式
// 优点：兼容性更好，因为不需要服务器端处理路径。
// 缺点：URL带有#不太美观，且在SEO优化方面相对较差。

//总上所述,面向客户用第一个好看,面向后端的用第二个,安心
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  routes: [
    //一个一个的路由规则
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "home",
      path: "/home",
      component: Home,
    },
    {
      name: "about",
      path: "/about",
      component: About,
    },
    {
      name: "news",
      path: "/news",
      component: News,
      children: [
        { name: "newsdetails", path: "newsdetails", component: NewsDetails },
        //子集path不用写斜杠
      ],
    },
  ],
});

export default router;
