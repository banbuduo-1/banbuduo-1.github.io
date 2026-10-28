// ============================================================
// 应用入口文件
// 功能：创建 Vue 根实例（挂载路由）并挂载到 #app
// ============================================================
import Vue from "vue";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 引入全局样式
import "./assets/style.css";

// 关闭生产环境下的启动提示
Vue.config.productionTip = false;

new Vue({
  router,              // 注入路由实例
  render: (h) => h(App), // 渲染根组件
}).$mount("#app");
