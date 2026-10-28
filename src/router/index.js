// ============================================================
// 路由配置
// 说明：使用默认 hash 模式，GitHub Pages 等静态托管无需额外配置
// ============================================================
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import GroupView from "../views/GroupView.vue";

// 安装路由插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    // 主页面：模块（分组）选择
    { path: "/", name: "home", component: Home },
    // 分组子页面：按分组下标进入（大号/小号…）
    { path: "/group/:gi", name: "group", component: GroupView },
    // 未知路径一律回主页面
    { path: "*", redirect: "/" },
  ],
});
